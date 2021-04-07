import styled from 'styled-components';
import React, {useState} from 'react';
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
      &.selected{
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
const TagsSection: React.FunctionComponent = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const onAddTag = () => {
        const tagName = window.prompt('请输入标签名:');
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }
    };
    const onToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index >= 0) {
            //如果tag已经被选中，就复制所有没被选中的tag，作为新的 selectedTag
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };
    return (
        //Wrapper为外层容器
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={() => onToggleTag(tag)}
                    className={selectedTags.indexOf(tag)>=0?'selected':''}>{tag}</li>
                )}


            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );
};

export {TagsSection};
