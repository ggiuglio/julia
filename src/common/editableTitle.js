import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const EditableTitle = ({ article, articleOnEdit, editTitle, titleOnEdit }) => {
  const [title, setTitle] = useState(undefined);
  let timeout = undefined;

  useEffect(() => {
    if (!title || !titleOnEdit) {
      setTitle(article.title);
    }
  },  [title, article.title, article.firebaseId, articleOnEdit, titleOnEdit]);

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

export default EditableTitle;