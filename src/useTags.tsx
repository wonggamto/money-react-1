import {useState} from 'react';
import {createId} from './libs/createId';

const defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
];
// 封装自定义的获取、设置 tags 的Hook
const useTags = () => {

    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    const findTag = (id: number) => {
       return  tags.filter(tag => tag.id === id)[0];
    };
    return {
        tags: tags,
        setTags: setTags,
        findTag: findTag
    };
};
export {useTags};