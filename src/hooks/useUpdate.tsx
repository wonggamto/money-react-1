import {useEffect, useRef} from 'react';
//防止 多余的 setItem 的hooks
const useUpdate = (fn:()=>void,deps:any[]) => {
    const count = useRef(0);//计数器，如果 count > 1 表示不是第一次
    useEffect(() => {
        count.current += 1;
    });
    useEffect(() => {
        if (count.current > 1) {
            fn();
        }
    }, [deps]);
};
export {useUpdate};