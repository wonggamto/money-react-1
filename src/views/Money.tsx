import {Layout} from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

//money页面
function Money() {
    //默认值数据
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0 //默认金额
    });
    type Selected = typeof selected;
    const onChange = (obj: Partial<Selected>) => {
        setSelected({
            ...selected,
            ...obj,
        });

    };
    return (
        <MyLayout>
            {selected.tagIds}
            <TagsSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds: tagIds})}/>
            {selected.note}
            <NoteSection value={selected.note} onChange={(note) => onChange({note: note})}/>
            {selected.category}
            <CategorySection value={selected.category} onChange={(category) => onChange({category: category})}/>
            {selected.amount}
            <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount:amount})}
                              onOk={() => {}}/>
        </MyLayout>
    );
}

export {Money};