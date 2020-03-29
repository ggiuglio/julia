import React from 'react';
import styled from 'styled-components';
import Header from '../menu/header';

const Container = styled.div`
  width: 100vw;
  ::-webkit-scrollbar {
    background: #efefef;
    width: 3px;
    height: 3px;
  }
`;

const Main = () => {
  return <Container>
    <Header></Header>
  </Container>
}

export default Main;