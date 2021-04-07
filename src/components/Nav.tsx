import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {Icon} from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: white;

  > ul {
    display: flex;

    > li {
      width: 33.333333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2px 0;

        .icon {
          width: 28px;
          height: 28px;
        }

        &.selected {
          background: #e7eaed;
        }
      }


    }
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>

                    <NavLink to="/tags" activeClassName="selected"> <Icon name="tags"/>标签页</NavLink>
                </li>
                <li>

                    <NavLink to="/money" activeClassName="selected"><Icon name="money"/>记账页</NavLink>
                </li>
                <li>

                    <NavLink to="/statistics" activeClassName="selected"><Icon name="chart"/>统计</NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};
export {Nav};