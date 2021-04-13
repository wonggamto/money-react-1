import styled from 'styled-components';

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

    @media (max-height: 570px) {
      > button {
        height: 40px;
        &.ok {
          height: 80px;
        }
      }
    }
  }

`;
export {Wrapper};