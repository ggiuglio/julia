import React from 'react';
import { connect } from "react-redux";
import { editNewArticleTitle } from '../store/actions/actionsCreator';
import EditableTitle from '../common/editableTitle';

const NewArticleTitle = ({ editTitle }) => {
  const newArticle = {firebaseId: '000', title: ''}

  return <EditableTitle
    placeHolder={'Insert article title'}
    article={newArticle}
    articleOnEdit='000'
    editTitle= {editTitle}
    titleOnEdit=''>
  </EditableTitle>
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    editTitle: (title) => dispatch(editNewArticleTitle(title))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticleTitle);