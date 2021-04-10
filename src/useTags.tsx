import {useState} from 'react';
import {createId} from './libs/createId';

// 封装自定义的获取、设置 tags 的Hook
const useTags = () => {

    const [tags, setTags] = useState<{ id: number; name: string }[]>(
        [
            {id: createId(), name: '衣'},
            {id: createId(), name: '食'},
            {id: createId(), name: '住'},
            {id: createId(), name: '行'}
        ]);
    return {
        tags: tags,
        setTags: setTags
    };
};
export {useTags};