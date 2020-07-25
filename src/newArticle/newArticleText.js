import React from 'react';
import { connect } from "react-redux";
import { editNewArticleText } from '../store/actions/actionsCreator';
import EditableText from '../common/editableText';

const NewArticelText = ({ editText }) => {
  const newArticle = {firebaseId: '000', text: ""}

  return <EditableText
    placeholder={'Insert new article text'}
    article={newArticle}
    articleOnEdit='000'
    editText={editText}
    textOnEdit=''>
  </EditableText>
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    editText: (text) => dispatch(editNewArticleText(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticelText);