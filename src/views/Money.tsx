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
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0 //默认金额
    });
    return (
        <MyLayout>
            {selected.tags}
            <TagsSection value={selected.tags} onChange={(tags) => setSelected({
                ...selected,
                tags: tags
            })}/>
            {selected.note}
            <NoteSection value={selected.note} onChange={(note => setSelected({
                ...selected,
                note: note
            }))}/>
            {selected.category}
            <CategorySection value={selected.category} onChange={(category => setSelected({
                ...selected,
                category: category
            }))}

            />
            {selected.amount}
            <NumberPadSection value={selected.amount} onChange={(amount => setSelected({
                ...selected,
                amount: amount
            }))}
            onOk={()=>{}}/>
        </MyLayout>
    );
}

export {Money};