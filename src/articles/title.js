import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { getArticleOnEdit } from '../store/selectors/selector';

const TitleContainer = styled.div`
  margin-right: 10px;
`;
const ArticleTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const ArticleTitleEdit = styled.input`
  width: 100%;
  padding: 5px;
`;

const Title = ({ article, articleOnEdit }) => {

  return <TitleContainer>
    {article.firebaseId !== articleOnEdit ?
      <ArticleTitle>{article.title}</ArticleTitle> :
      <ArticleTitleEdit value={article.title}></ArticleTitleEdit>
    }
  </TitleContainer>
}
const mapStateToProps = state => {
  return {
    articleOnEdit: getArticleOnEdit(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);