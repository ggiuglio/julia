import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { getArticleOnEdit, getArticleOnEditText } from '../store/selectors/selector';
import { editArticleText } from '../store/actions/actionsCreator';
import EditableText from '../common/editableText';

const ArticleText = ({ article, articleOnEdit, editText, textOnEdit }) => {
  return <EditableText
    article={article}
    articleOnEdit={articleOnEdit}
    editText={editText}
    textOnEdit={textOnEdit}>
  </EditableText>
}

const mapStateToProps = state => {
  return {
    articleOnEdit: getArticleOnEdit(state),
    textOnEdit: getArticleOnEditText(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editText: (text) => dispatch(editArticleText(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleText);