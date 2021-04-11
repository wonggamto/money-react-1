import {Layout} from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;


type Category = '-' | '+'
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0 //默认金额
};

//money页面
function Money() {
    //默认值数据
    const [selected, setSelected] = useState(defaultFormData);
    const {addRecord} = useRecords();
    type Selected = typeof selected;
    const onChange = (obj: Partial<Selected>) => {
        setSelected({
            ...selected,
            ...obj,
        });

    };
    const submit = () => {
        addRecord(selected);
        alert('保存成功');
        setSelected(defaultFormData);
        //刷新后更新 output 的 UI ，
        setTimeout(() => {
            window.location.reload();
        }, 1);
    };
    return (
        <MyLayout>
            {JSON.stringify(selected)}
            <TagsSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds: tagIds})}/>
            <NoteSection value={selected.note} onChange={(note) => onChange({note: note})}/>
            <CategorySection value={selected.category} onChange={(category) => onChange({category: category})}/>
            <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount: amount})}
                              onOk={submit}/>
        </MyLayout>
    )
        ;
}

export {Money};