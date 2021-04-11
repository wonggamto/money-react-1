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
    const findTag = (id: number) => {//根据 id 查找 tag
        return tags.filter(tag => tag.id === id)[0];
    };
    //根据 tag 的id 查找tag 的下标
    const findTagIndex = (id: number) => {
        let result = -1;//
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };
    const updateTag = (id: number, obj: { name: string }) => {
        setTags(tags.map(
            tag=>{
                return tag.id === id ? {id,name:obj.name} : tag;
            }
        ))
        // //获取 要改的tag 的下标
        // const index = findTagIndex(id);
        // //深拷贝 tags 得到tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // // 把 tagsClone 的第 index项删掉，换成{id:id,name:obj.name}
        // tagsClone.splice(index, 1, {id: id, name: obj.name});
        // setTags(tagsClone);
    };
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
        // //获取 要改的tag 的下标
        // const index = findTagIndex(id);
        // //深拷贝 tags 得到tagsClone
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // // 把 tagsClone 的 第index 项删掉
        // tagsClone.splice(index, 1);
        // setTags(tagsClone);
    };
    return {
        tags: tags,
        setTags: setTags,
        findTag: findTag,
        updateTag: updateTag,
        deleteTag: deleteTag
    };
};
export {useTags};