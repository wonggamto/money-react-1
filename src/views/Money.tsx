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
    amount: 0,//默认金额
    createdAt: new Date()
};
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

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
        if (addRecord(selected)) {
            alert('保存成功');
            setSelected(defaultFormData);
            //刷新后更新 output 的 UI ，
            setTimeout(() => {
                window.location.reload();
            }, 0);
        }
        ;
    };

    return (
        <MyLayout scrollTop={9999}>
            <TagsSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds: tagIds})}/>
            <NoteSection placeholder="请输入备注" value={selected.note} onChange={(note) => onChange({note: note})}/>
            <CategoryWrapper>
                <CategorySection value={selected.category}
                                 onChange={(category) => onChange({category: category})}/>
            </CategoryWrapper>
            <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount: amount})}
                              onOk={submit}/>
        </MyLayout>
    )
        ;
}

export {Money};