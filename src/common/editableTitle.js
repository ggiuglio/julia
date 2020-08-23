import React, { useState } from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  margin-right: 10px;
`;
const TitleFixed = styled.div`
  font-weight: bold;
`;
const TitleEdit = styled.input`
  width: 100%;
  padding: 5px;
`;

const EditableTitle = ({ article, articleOnEdit, editTitle, titleOnEdit, placeHolder }) => {
  const [title, setTitle] = useState(article.title);
  let timeout = undefined;

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
      <TitleEdit value={title} placeholder={placeHolder} onChange={(e) => changeTitle(e.target.value)}></TitleEdit>
    }
  </TitleContainer>
}

export default EditableTitle;