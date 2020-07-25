import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { createArticle, cancelArticleEdit, resetNewArticle } from '../store/actions/actionsCreator';
import okIcon from '../assets/images/ok2.png';
import cancelIcon from '../assets/images/cancel2.png';

const NewArticleActions = styled.div`
  width: 100px;
`;
const Icon = styled.img`
  width: 20px;
  padding: 5px;
  :hover {
    border: 1px solid; 
  }
`;

const NewArticleActionControls = ({ saveNewArticle, cancelEdit }) => {

  const cancelArticleEvent = (event) => {
    event.stopPropagation();
    cancelEdit();
  }

  const saveArticleEvent = (event) => {
    event.stopPropagation();
    saveNewArticle();
  }

  return <NewArticleActions>
    <Icon src={okIcon} onClick={(e) => saveArticleEvent(e)}></Icon>
    <Icon src={cancelIcon} onClick={(e) => cancelArticleEvent(e)}></Icon>
  </NewArticleActions>
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    saveNewArticle: (articleId) => dispatch(createArticle()),
    cancelEdit: () => dispatch(resetNewArticle()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticleActionControls);