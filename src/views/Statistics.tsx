import {Layout} from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
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
    color:#999;
  }
`;

//统计页面
function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {getTagName} = useTags();
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            <div>
                {records.map(r => {
                    return <Item>
                        {/*{dayjs(r.createdAt).format('YYYY年MM月DD日')}*/}
                        <div className="tags">
                            {r.tagIds.map(tagId => <span>{getTagName(tagId)}</span>)}
                        </div>
                        {r.note ? <div className="note"> {r.note}</div> : null}
                        <div className="amount">
                            ￥{r.amount}
                        </div>
                    </Item>;
                })}
            </div>
        </Layout>
    );
}

export {Statistics};