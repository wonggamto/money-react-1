import {Layout} from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #FFF;
  padding: 12px 16px;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0px 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
      
    }
  }
`;
const CategorySection = styled.section``;

const NumberPadSection = styled.section``;


//money页面
function Money() {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在这里添加备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}

export {Money};