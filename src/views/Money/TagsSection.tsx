import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';
import {Button} from '../../components/Button';
//标签组件
const Wrapper = styled.section`
  background: #FFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: #f60;
      }
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

type Props = {
    value: number[];//函数组件的参数类型
    onChange: (selected: number[]) => void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const {tags,addTag} = useTags();
    const selectedTagIds = props.value;

    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            //如果tag已经被选中，就复制所有没被选中的tag，作为新的 selectedTag
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([...selectedTagIds, tagId]);
        }
    };
    return (
        //Wrapper为外层容器
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => onToggleTag(tag.id)}
                        className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}>{tag.name}</li>
                )}


            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    );
};

export {TagsSection};
