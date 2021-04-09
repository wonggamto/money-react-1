import {useState} from 'react';

// 获取、设置 tags 的函数
const useTags = () => {

    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    return {
        tags: tags,
        setTags: setTags
    };
};
export {useTags};