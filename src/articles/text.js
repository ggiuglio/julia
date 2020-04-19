import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { getArticleOnEdit } from '../store/selectors/selector';

const TextContainer = styled.div`
  margin-top: 20px;
  margin-right: 10px;
`;
const ArticleText = styled.div`
  width: 100%;
`;
const ArticleTextEdit = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  padding: 5px;
`;

const Text = ({ article, articleOnEdit }) => {

  return <TextContainer>
    {article.firebaseId !== articleOnEdit ?
      <ArticleText>{article.text}</ArticleText> :
      <ArticleTextEdit value={article.text}></ArticleTextEdit>
    }
  </TextContainer>
}
const mapStateToProps = state => {
  return {
    articleOnEdit: getArticleOnEdit(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Text);