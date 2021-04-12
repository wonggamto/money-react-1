import {Layout} from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';

const CategoryWrapper = styled.div`
  background: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;
//统计页面
function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {getTagName} = useTags();

    const hash: { [Key: string]: RecordItem[] } = {};
    //根据选中的类型 进行数据分组
    const selectedRecords = records.filter(r => r.category === category);
    selectedRecords.forEach(r => {
        const key = dayjs(r.createdAt).format('YYYY年MM月DD日');
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    });
    console.log(array);
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>

            {array.map(([date,records])=><div>

                <Header>
                    {date}
                </Header>
                <div>
                    {records.map(r => {
                        return <Item>
                            <div className="tags oneLine">
                                {r.tagIds.map(tagId => <span key={tagId}>{getTagName(tagId)}</span>)
                                    .reduce((result,span,index,array)=>
                                        result.concat(index < array.length -1 ? [span,'，']:[span]),[] as ReactNode[])
                                }
                            </div>
                            {r.note ? <div className="note"> {r.note}</div> : null}
                            <div className="amount">
                                ￥{r.amount}
                            </div>
                        </Item>;
                    })}
                </div>
            </div>)}
        </Layout>
    );
}

export {Statistics};