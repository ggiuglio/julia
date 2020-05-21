import React from 'react';
import { connect } from "react-redux";
import { editArticleTitle } from '../store/actions/actionsCreator';
import { getArticleOnEdit, getArticleOnEditTitle } from '../store/selectors/selector';
import EditableTitle from '../common/editableTitle';

const ArticleTitle = ({ article, articleOnEdit, editTitle, titleOnEdit }) => {
  return <EditableTitle
    article={article}
    articleOnEdit={articleOnEdit}
    editTitle={editTitle}
    titleOnEdit={titleOnEdit}>
  </EditableTitle>
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