import React from 'react';
import styled from 'styled-components';

const TitleText = styled.div`
  font-size: 40px;
  text-align: center;
  margin: 5px;
  @media (min-width: 600px) {
    flex-grow: 1;
    min-width: 300px;
  }
`;

const Title = () => {

  return <TitleText>
    Julia Amberger
  </TitleText>

}

export default Title;
