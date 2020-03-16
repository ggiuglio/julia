import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  height: 40px;
`;
const InnerContainer = styled.div`
  width: 100vw;
  height: 40px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 20px;
  scrollTop: 200;
`;
const MenuContainer = styled.div`
  width: max-content;
`;
const Element = styled.div`
  display: inline-block;
  font-size: 25px;
  letter-spacing: 2px;
  padding: 5px 20px;
  :first-child {
    padding-left: 50px;
    border-bottom: 1px solid #222222;
  }
  :last-child {
    padding-right: 50px;
  }
`;
const InnerElement = styled.div`
  height: 0px;
  width: ${({ selected }) => selected ? '100%' : '0px'}
  border-bottom: 1px solid black;
  transition: width 0.5s;
  `;

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  return <Container>
    <InnerContainer>
      <MenuContainer>
        <Element onClick={() => setSelectedItem(1)}>
          About
          <InnerElement selected={selectedItem === 1}>
          </InnerElement>
        </Element>
        <Element onClick={() => setSelectedItem(2)}>
          Print
          <InnerElement selected={selectedItem === 2} >
          </InnerElement>
        </Element>
        <Element onClick={() => setSelectedItem(3)}>
          Broadcast
          <InnerElement selected={selectedItem === 3}>
          </InnerElement>
        </Element>
        <Element onClick={() => setSelectedItem(4)}>
          Contacts
          <InnerElement selected={selectedItem === 4}>
          </InnerElement>
        </Element>
      </MenuContainer>
    </InnerContainer>
  </Container>

}

export default Menu;