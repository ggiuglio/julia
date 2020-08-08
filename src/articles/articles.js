import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from "react-redux";
import { loadArticlesAction } from '../store/actions/actionsCreator';
import { getArticles, getUser } from '../store/selectors/selector';
import ActionControls from './actionControls';
import ArticleTitle from './articleTitle';
import ArticleText from './articleText';
import ArticleLink from './articleLink';
import NewArticle from '../newArticle/newArticle';

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
`;
const Introduction = styled.div`
  padding: 20px 10px;
  font-size: 16px;
  text-align: justify;
  border-bottom: 1px solid #cccccc;
`;
const Article = styled.div`
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
const ArticleImage = styled.img`
  max-height: 150px;
  max-width: 80vw;
  @media (min-width: 600px) {
   width: 250px;
   max-height: 250px;
  }
`;
const ArticleImageContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
  width: 80vw;
  @media (min-width: 600px) {
    max-height: 200px;
    width: 250px;
  }
`;
const ArticleBody = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    display: inline-flex;
  }
`;
const ArticleContent = styled.div`
  @media (min-width: 600px) {
    padding-right: 20px;
    align-items: top;
  font-size: 14px;
  flex-grow: 1;
  text-align: justify;
  box-sizing: border-box;
  }
`;
const ArticleTitleContainer = styled.div`
  border-bottom: 1px solid black;
`;
const ArticleTextContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100px;
  padding: 5px;
  margin: 7px 0;
  @media (min-width: 600px) {
    min-height: 170px;
    margin: 12px 0;
  }
`;
const ArticleLinkContainer = styled.div`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;
const ArticleActions = styled.div``;

const Articles = ({ articles, loadArticles, user }) => {
  useEffect(() => {
    if (!articles) {
      loadArticles();
    }
  });

  return <Container>
    <MainContent>
      <Introduction>
        Here there are the articles Julia worte in the last years, some of the websited that hown the contents
        might have advertising or paywall
      </Introduction>
      {
        articles ? articles.map(article =>
          <Article key={article.firebaseId}>
            <ArticleBody>
              <ArticleImageContainer>
                <ArticleImage src={article.img} />
              </ArticleImageContainer>
              <ArticleContent>
                <ArticleTitleContainer>
                  <ArticleTitle article={article}></ArticleTitle>
                </ArticleTitleContainer>
                <ArticleTextContainer>
                  <ArticleText article={article}></ArticleText>
                </ArticleTextContainer>
                <ArticleLinkContainer>
                  <ArticleLink article={article}></ArticleLink>
                </ArticleLinkContainer>
              </ArticleContent>
              <ArticleActions>
                {user ? <ActionControls article={article}></ActionControls> : ''}
              </ArticleActions>
            </ArticleBody>
          </Article>
        ) : ''
      }
      <NewArticle></NewArticle>
    </MainContent>
  </Container>
}

const mapStateToProps = state => {
  return {
    articles: getArticles(state),
    user: getUser(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadArticles: () => dispatch(loadArticlesAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);