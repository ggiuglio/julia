import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { setArticleOnEdit, deleteArticleConfirm } from '../store/actions/actionsCreator';
import { getArticleOnEdit } from '../store/selectors/selector';
import editIcon from '../assets/images/edit.png';
import deleteIcon from '../assets/images/delete.png';
import xIcon from '../assets/images/x.png';

const ArticleActions = styled.div``;
const Icon = styled.img`
  z-index: 100;
  width: 20px;
  padding: 5px;
  :hover {
    border: 1px solid; 
  }
`;

const ActionControls = ({ article, setOnEdit, articleOnEdit, deleteArticle }) => {

  const deleteArticleEvent = (event) => {
    event.stopPropagation();
    console.log('delete article', event);
    deleteArticle(article.firebaseId);
  }

  const editArticleEvent = (event) => {
    event.stopPropagation();
    console.log('edit article', article);
    setOnEdit(article.firebaseId);
  }

  return <ArticleActions>
    <Icon src={editIcon} onClick={(e) => editArticleEvent(e)}></Icon>
    <Icon src={deleteIcon} onClick={(e) => deleteArticleEvent(e)}></Icon>
  </ArticleActions>
}
const mapStateToProps = state => {
  return {
    articleOnEdit: getArticleOnEdit(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setOnEdit: (articleId) => dispatch(setArticleOnEdit(articleId)),
    deleteArticle: (articleId) => dispatch(deleteArticleConfirm(articleId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionControls);