import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;

`;
//函数组件 参数类型
type Props = {
    value: string;
    onChange: (value: string) => void
}
const NoteSection: React.FunctionComponent<Props> = (props) => {
    const note = props.value;
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value);
    };
    return (
        <Wrapper>
            <Input type="text" label="备注" value={note} onChange={onChange} placeholder="请输入备注"/>
        </Wrapper>
    );
};
export {NoteSection};