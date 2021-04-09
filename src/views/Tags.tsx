import {Layout} from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import {Icon} from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background: #FFF;

  > li {
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .icon {
      width: 2em;
      height: 2em;
    }
  }

`;
const Button = styled.button`
  border: none;
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 4px;
  background: #F60;
  color: white;

`;
//居中标签
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// 空白块标签
const Space = styled.div`
  height: 16px;
`;

//tags页面
function Tags() {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag}><span className="oneLine">{tag}</span><Icon name="more"/></li>
                )}
            </TagList>
            <Center>
                <Space/>
                <Space/>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

export {Tags};
