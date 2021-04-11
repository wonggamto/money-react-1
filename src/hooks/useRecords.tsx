//money 页面的 数据持久化 hook
import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
    tagIds: number[];
    note: string;
    category: '+' | '-';
    amount: number;
    // createdAt: string;
}
const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, [records]);
    const addRecord = (record: RecordItem) => {
        setRecords([...records, record]);

    };

    return {
        records, addRecord,
    };
};
export {useRecords};