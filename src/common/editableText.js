import React, { useState } from 'react';
import styled from 'styled-components';

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

const EditableText = ({ article, articleOnEdit, editText, textOnEdit, placeholder }) => {
  const [text, setText] = useState(article.text);
  let timeout = undefined;

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
      <TextEdit value={text} placeholder={placeholder} onChange={(e) => changeText(e.target.value)}></TextEdit>
    }
  </TextContainer>
}

export default EditableText