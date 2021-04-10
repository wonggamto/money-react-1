import {useState} from 'react';

// 封装自定义的获取、设置 tags 的Hook
const useTags = () => {

    const [tags, setTags] = useState<{ id: number; name: string }[]>(
        [
            {id: 1, name: '衣'},
            {id: 2, name: '食'},
            {id: 3, name: '住'},
            {id: 4, name: '行'}
        ]);
    return {
        tags: tags,
        setTags: setTags
    };
};
export {useTags};