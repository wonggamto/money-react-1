import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    > button {
      border: none;
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      background: #e0e0e0;

      &:active {
        background: #f2f2f2;
      }

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }
    }
  }
`;
const NumberPadSection: React.FunctionComponent = (props) => {
    const [output, _setOutput] = useState('0');
    const setOutput = (output: string) => {
        if (output.length > 16) {
            output = output.slice(0, 16);
        } else if (output.length === 0) {
            output = '0';
        }
        _setOutput(output);
    };
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {return;}
        {
            switch (text) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if (output === '0') {
                        setOutput(text);
                    } else {
                        setOutput(output + text);
                    }
                    break;
                case '删除':
                    if (output.length === 1) {
                        setOutput('');
                    } else {
                        setOutput(output.slice(0, output.length - 1));
                    }
                    break;
                case '清空':
                    setOutput('');
                    break;
                case 'OK':
                    console.log('ok');
                    break;
                case '.':
                    if (output.indexOf('.') >= 0) {return;}
                    setOutput(output + '.');
                    break;
            }
        }
    };
    return (
        <Wrapper>
            <div className="output">{output}</div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </Wrapper>
    );
};
export {NumberPadSection};