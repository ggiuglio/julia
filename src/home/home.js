import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { getBackground } from '../store/selectors/selector';
import { history } from '../App';

import sea from '../assets/images/sea.jpg';
import desert from '../assets/images/desert.jpg';
import forest from '../assets/images/forest.jpg';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${({ image }) => 'url(' + image + ')'};
  background-size: cover;
`;

const Name = styled.div`
  color: white;
  text-align: center;
  font-size: 50px;
  @media (min-width: 600px) {
    font-size: 100px;
  }
`;
const Job = styled.div`
  color: white;
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const About = styled.div`
  width: fit-content;
  border: 2px solid white;
  color: white;
  font-size: 16px;
  padding: 10px 20px
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  transition: 170ms ease-in-out;
  :hover {
    background-color: white;
    color: black;
  }
`;

const Content = styled.div`
  letter-spacing: 2px;
  box-sizing: border-box;
  width: 100vw;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25vh;

  @media (min-width: 600px) {
    box-sizing: content-box;
    width: 50vw;
    padding-left: 25vw;
    padding-right: 25vw;
  }
`;

const Home = ({ background }) => {
  let bg;
  switch (background) {
    case 'sea': {
      bg = sea;
      break;
    }
    case 'desert': {
      bg = desert;
      break;
    }
    case 'forest': {
      bg = forest;
      break;
    }
    default:
      bg = sea;
      break;
  }

  const goToAbout = () => {
    history.push('/about')
  }

  return <Background image={bg}>
    <Content>
      <Name>
        Julia Amberger
      </Name>
      <Job>
        Journalist, Writer and Researcher
      </Job>
      <About onClick={() => goToAbout()}>
        ABOUT
      </About>
    </Content>
  </Background>
}

const mapStateToProps = state => {
  return {
    background: getBackground(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);