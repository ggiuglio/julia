import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { getArticleOnEdit, getArticleOnEditText } from '../store/selectors/selector';
import { editArticleText } from '../store/actions/actionsCreator';

const TextContainer = styled.div`
  margin-top: 20px;
  margin-right: 10px;
`;
const TextFixed = styled.div`
  width: 100%;
`;
const TextEdit = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  padding: 5px;
`;

const ArticelText = ({ article, articleOnEdit, editText, textOnEdit }) => {
  const [text, setText] = useState(undefined);
  let timeout = undefined;

  useEffect(() => {
    if (!text || !textOnEdit)  {
      setText(article.text);
    }
  }, [text, article.text, article.firebaseId, textOnEdit]);

  const changeText = (textInput) => {
    setText(textInput);
    if(timeout) {
      clearInterval(timeout);
    }
    timeout = setInterval(editText(textInput, 200));
  }

  return <TextContainer>
    {article.firebaseId !== articleOnEdit ?
      <TextFixed>{article.text}</TextFixed> :
      <TextEdit value={text} onChange={(e) => changeText(e.target.value)}></TextEdit>
    }
  </TextContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticelText);