import React, { useState } from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  margin-right: 10px;
`;
const LinkFixed = styled.div`
  font-size: 16px;
`;

const LinkEdit = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
`;

const EditableLink = ({ article, articleOnEdit, editLink, linkOnEdit, linkPlaceholder, linkNamePlaceholder }) => {
  const [link, setLink] = useState(article.link);
  const [linkName, setLinkName] = useState(article.linkName);

  let timeout = undefined;

  const changeLink = (linkInput) => {
    setLink(linkInput);
    if (timeout) {
      clearInterval(timeout);
    }
    timeout = setInterval(editLink({ linkName: linkName, link: linkInput }, 200));
  }

  const changeLinkName = (linkNameInput) => {
    setLinkName(linkNameInput);
    if (timeout) {
      clearInterval(timeout);
    }
    timeout = setInterval(editLink({ linkName: linkNameInput, link: link }, 200));
  }

  const openArticle = () => {
    window.open(article.link);
  };

  return <TitleContainer>
    {article.firebaseId !== articleOnEdit ?
      <LinkFixed onClick={() => openArticle()}>{article.linkName}</LinkFixed> :
      <div>
        <LinkEdit value={linkName} placeholder={linkNamePlaceholder} onChange={(e) => changeLinkName(e.target.value)}></LinkEdit>
        <LinkEdit value={link} placeholder={linkPlaceholder} onChange={(e) => changeLink(e.target.value)}></LinkEdit>
      </div>
    }
  </TitleContainer>
}

export default EditableLink;