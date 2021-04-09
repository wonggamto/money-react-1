import {useState} from 'react';

// 封装自定义的获取、设置 tags 的Hook
const useTags = () => {

    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    return {
        tags: tags,
        setTags: setTags
    };
};
export {useTags};