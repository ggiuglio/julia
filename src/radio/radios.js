import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from "react-redux";
import { loadRadiosAction } from '../store/actions/actionsCreator';
import { getRadios, getUser } from '../store/selectors/selector';
import RadioActionControls from './radioActionControls';
import RadioTitle from './radioTitle';
import RadioText from './radioText';
import RadioLink from './radioLink';
import NewArticle from '../newArticle/newArticle';
import YouTube from 'react-youtube';

const slideIn = keyframes`
  from {
    opacity: 0;
    // margin-left: -300px;
  }
  to {
    opacity: 1;
    //margin-left: 0;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  animation: ${slideIn} .2s linear;
  ::-webkit-scrollbar {
    width: 4px;
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #cccccc;
  }
  @media (min-width: 600px) {
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    width: 100%;
    margin-top: 20px;
  }
`;
const MainContent = styled.div`
  padding: 0 5vw;
  @media (min-width: 600px) {
    padding: 0 10vw;
  }
`;
const Introduction = styled.div`
  padding: 20px 10px;
  font-size: 16px;
  text-align: justify;
  border-bottom: 1px solid #cccccc;
`;
const Radio = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 20px;
  width: calc(100vw - 40px);
  box-sizing: border-box;
  :last-child {
    margin-bottom: 20px;
  }
  @media (min-width: 600px) {
    width: 100%;
  }
`;

const RadioPlayerContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
  width: 80vw;
  @media (min-width: 600px) {
    max-height: 194px;
    width: 250px;
    margin-right: 20px;
  }
`;
const RadioPlayer = styled(YouTube)`
  max-height: 150px;
  max-width: 80vw;
  @media (min-width: 600px) {
  padding-top: 23px;
   width: 250px;
   max-height: 194px;
  }
`;
const RadioBody = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    display: inline-flex;
  }
`;
const RadioContent = styled.div`
  @media (min-width: 600px) {
    padding-right: 20px;
    align-items: top;
  font-size: 14px;
  flex-grow: 1;
  text-align: justify;
  box-sizing: border-box;
  }
`;
const RadioTitleContainer = styled.div`
  border-bottom: 1px solid black;
`;
const RadioTextContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100px;
  padding: 5px;
  margin: 7px 0;
  @media (min-width: 600px) {
    min-height: 170px;
    margin: 12px 0;
  }
`;
const RadioLinkContainer = styled.div`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

const RadioActions = styled.div``;

const Radios = ({ radios, loadRadios, user }) => {
  useEffect(() => {
    if (!radios) {
      loadRadios();
    }
  });

  return <Container>
    <MainContent>
      <Introduction>
        Here there are the radio feature Julia made, click on the video player to listen
            </Introduction>
      {
        radios ? radios.map(radio =>
          <Radio key={radio.firebareId}>
            <RadioBody>
              <RadioPlayerContainer>
                <RadioPlayer videoId={radio.link} />
              </RadioPlayerContainer>
              <RadioContent>
                <RadioTitleContainer>
                  <RadioTitle article={radio}></RadioTitle>
                </RadioTitleContainer>
                <RadioTextContainer>
                  <RadioText article={radio}></RadioText>
                </RadioTextContainer>
                <RadioLinkContainer>
                  <RadioLink article={radio}></RadioLink>
                </RadioLinkContainer>
              </RadioContent>
              <RadioActions>
                {user ? <RadioActionControls article={radio}></RadioActionControls> : ''}
              </RadioActions>
            </RadioBody>
          </Radio>
        ) : ''
      }
      <NewArticle></NewArticle>
    </MainContent>
  </Container>
}

const mapStateToProps = state => {
  return {
    radios: getRadios(state),
    user: getUser(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadRadios: () => dispatch(loadRadiosAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Radios);