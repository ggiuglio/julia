import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { editArticleTitle } from '../store/actions/actionsCreator';
import { getArticleOnEdit, getArticleOnEditTitle } from '../store/selectors/selector';

const TitleContainer = styled.div`
  margin-right: 10px;
`;
const TitleFixed = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const TitleEdit = styled.input`
  width: 100%;
  padding: 5px;
`;

const ArticleTitle = ({ article, articleOnEdit, editTitle, titleOnEdit }) => {
  const [title, setTitle] = useState(undefined);
  let timeout = undefined;

  useEffect(() => {
    if (title === undefined || !titleOnEdit) {
      setTitle(article.title);
    }
    if(articleOnEdit === article.firebaseId && titleOnEdit !== title ) {
      setTitle(titleOnEdit)
    }
  },  [title, article.title, titleOnEdit]);

  const changeTitle = (titleInput) => {
    setTitle(titleInput);
    if(timeout) {
      clearInterval(timeout);
    }
    timeout = setInterval(editTitle(titleInput, 200));
  }

  return <TitleContainer>
    {article.firebaseId !== articleOnEdit ?
      <TitleFixed>{article.title}</TitleFixed> :
      <TitleEdit value={title} onChange={(e) => changeTitle(e.target.value)}></TitleEdit>
    }
  </TitleContainer>
}
const mapStateToProps = state => {
  return {
    articleOnEdit: getArticleOnEdit(state),
    titleOnEdit: getArticleOnEditTitle(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editTitle: (title) => dispatch(editArticleTitle(title))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTitle);