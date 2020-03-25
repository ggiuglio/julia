import React from 'react';
import styled from 'styled-components';
import Menu from './menu.js';
import Title from './title.js';

const HeaderContent = styled.div`
  width: 100vw;
  position: relative;
  top: 0;
  left: 0;
  @media (min-width: 600px) {
    border-bottom: 1px solid #cccccc;
    display: inline-flex;
    width: calc(100vw - 40px);
    margin: 20px 20px;
  }
`;

const Header = () => {
  return <HeaderContent>
    <Title></Title>
    <Menu></Menu>
  </HeaderContent>
}

export default Header;
