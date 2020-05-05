import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from "react-redux";
import { loadArticlesAction } from '../store/actions/actionsCreator';
import { getArticles, getUser } from '../store/selectors/selector';
import ActionControls from './actionControls';
import ArticleTitle from './title';
import ArticelText from './text';
import ArticleLink from './link';
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
  padding-top: 20px;
  font-size: 16px;
  text-align: justify;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
`;
const Article = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 15px 5px;
  cursor: pointer;
  width: 100%;
  :last-child {
    margin-bottom: 20px;
  }
`;
const ArticleImage = styled.img`
  width: 100px;
    @media (min-width: 600px) {
      width: 20vw;
    }
`;
const ArticleBody = styled.div`
  display: inline-flex;
  width: 100%;
`;
const ArticleContent = styled.div`
  align-items: top;
  font-size: 14px;
  flex-grow: 1;
  text-align: justify;
  box-sizing: border-box;
  @media (min-width: 600px) {
    padding-right: 20px;
  }
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
          <Article key={article.id}>
            <ArticleBody>
              <ArticleImage src={defaultImg} />
              <ArticleContent>
                <ArticleTitle article={article}></ArticleTitle>
                <ArticelText article={article}></ArticelText>
                <ArticleLink article={article}></ArticleLink>
              </ArticleContent>
              <ArticleActions>
                {user ? <ActionControls article={article}></ActionControls> : ''}
              </ArticleActions>
            </ArticleBody>
          </Article>
        ) : ''
      }
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