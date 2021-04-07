import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 18px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        background: black;
        height: 3px;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
const CategorySection: React.FunctionComponent = (props) => {
    // 收缩类型范围 限制在 - 和 + 的数组
    const [categoryList] = useState<('-'|'+')[]>(['-', '+']);
    const categoryMap = {'-':'支出','+':'收入'}
    const [category, setCategory] = useState('-');
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li className={category === c ? 'selected' : ''}
                        onClick={() => {setCategory(c);}}>{categoryMap[c]}
                    </li>
                )}
            </ul>
            {props.children}
        </Wrapper>
    );
};
export {CategorySection};