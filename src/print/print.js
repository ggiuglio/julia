import React from 'react';
import styled, {keyframes} from 'styled-components';

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
  @media (min-width: 600px) {
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    width: 100%;
    margin-top: 20px;
  }
`;
const MainContent = styled.div`
  padding: 0 20px;
`;
const ArticleList = styled.div`
  margin-top: 20px;
  text-align: justify;
`;
const Article = styled.div`
  margin-top: 20px;
  text-align: justify;
`;

const Print = () => {
  return <Container>
    <MainContent>
      <ArticleList>
       <Article>
          one article
       </Article>
       <Article>
          second article
       </Article>
       <Article>
          last one
       </Article>
      </ArticleList>
    </MainContent>
  </Container>
}

export default Print;