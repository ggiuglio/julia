import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { setArticleOnEdit, deleteArticleConfirm, confirmArticleEdit, cancelArticleEdit } from '../store/actions/actionsCreator';
import { getArticleOnEdit } from '../store/selectors/selector';
import editIcon from '../assets/images/edit.png';
import deleteIcon from '../assets/images/delete.png';
import okIcon from '../assets/images/ok2.png';
import cancelIcon from '../assets/images/cancel2.png';

const ArticleActions = styled.div`
  width: 100px;
`;
const Icon = styled.img`
  width: 20px;
  padding: 5px;
  :hover {
    border: 1px solid; 
  }
`;

const ActionControls = ({ article, setOnEdit, articleOnEdit, deleteArticle, saveArticle, cancelEdit }) => {

  const deleteArticleEvent = (event) => {
    event.stopPropagation();
    deleteArticle(article.firebaseId);
  }

  const editArticleEvent = (event) => {
    event.stopPropagation();
    setOnEdit(article.firebaseId);
  }

  const cancelArticleEvent = (event) => {
    event.stopPropagation();
    cancelEdit();
  }
  
  const saveArticleEvent = (event) => {
    event.stopPropagation();
    saveArticle(article.firebaseId);
  }

  return <ArticleActions>
    {
      articleOnEdit !== article.firebaseId ?
        <div>
          <Icon src={editIcon} onClick={(e) => editArticleEvent(e)}></Icon>
          <Icon src={deleteIcon} onClick={(e) => deleteArticleEvent(e)}></Icon>
        </div>
        :
        <div>
          <Icon src={okIcon} onClick={(e) => saveArticleEvent(e)}></Icon>
          <Icon src={cancelIcon} onClick={(e) => cancelArticleEvent(e)}></Icon>
        </div>
    }

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
    deleteArticle: (articleId) => dispatch(deleteArticleConfirm(articleId)),
    saveArticle: (articleId) => dispatch(confirmArticleEdit(articleId)),
    cancelEdit: () => dispatch(cancelArticleEdit()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionControls);