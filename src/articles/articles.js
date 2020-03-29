import React from 'react';
import styled, { keyframes } from 'styled-components';

import defaultImg from '../assets/images/acet.jpg';

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
    background: #efefef;
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-thumb {
    backgorund-color: black
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
`;
const Introduction = styled.div`
  margin-top: 20px;
  font-size: 16px;
  text-align: justify;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
`;
const Article = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 15px 5px;
  :last-child {
    margin-bottom: 20px;
  }
`;
const ArticleImage = styled.img`
  withd: 100px;
  height: 100px;
    @media (min-width: 600px) {
    width: 20vw;
    height: 20vw;
  }
`;
const ArticleBody = styled.div`
  display: inline-flex;
  align-items: center;
`;
const ArticleText = styled.div`
  font-size: 14px;
  flex-grow: 1;
  text-align: justify;
`;
const ArticleTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Articles = () => {
  return <Container>
    <MainContent>
      <Introduction>
        Here there are the articles Julia worte in the last years, some of the websited that hown the contents
        might have advertising or paywall
      </Introduction>
      <div>
      <Article>
        <ArticleBody>
          <ArticleImage src={defaultImg} />
          <ArticleText>
            <ArticleTitle>
              One article
            </ArticleTitle>
              The article is about this, this and that. And also aobut other thigs that I saw around and that
              I found pretty cool <br />
              Read here the outcome of the trip I did to find out this stuff and some more
          </ArticleText>
        </ArticleBody>
      </Article>
      <Article>
        <ArticleBody>
          <ArticleImage src={defaultImg} />
          <ArticleText>
            <ArticleTitle>
              One article
            </ArticleTitle>
              The article is about this, this and that. And also aobut other thigs that I saw around and that
              I found pretty cool <br />
              Read here the outcome of the trip I did to find out this stuff and some more
          </ArticleText>
        </ArticleBody>
      </Article>
      <Article>
        <ArticleBody>
          <ArticleImage src={defaultImg} />
          <ArticleText>
            <ArticleTitle>
              One article
            </ArticleTitle>
              The article is about this, this and that. And also aobut other thigs that I saw around and that
              I found pretty cool <br />
              Read here the outcome of the trip I did to find out this stuff and some more
          </ArticleText>
        </ArticleBody>
      </Article>
      </div>
    </MainContent>
  </Container>
}

export default Articles;