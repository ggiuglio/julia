import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { editArticleLink } from '../store/actions/actionsCreator';
import { getArticleOnEdit, getArticleOnEditLink } from '../store/selectors/selector';

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

const ArticleLink = ({ article, articleOnEdit, editLink, linkOnEdit }) => {
  const [link, setLink] = useState(undefined);
  const [linkName, setLinkName] = useState(undefined);

  let timeout = undefined;

  useEffect(() => {
    if (!link || !linkName || !linkOnEdit) {
      setLink(article.link);
      setLinkName(article.linkName);
    }
  }, [link, linkName, article.link, article.linkName, articleOnEdit, linkOnEdit]);

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
        <LinkEdit value={linkName} onChange={(e) => changeLinkName(e.target.value)}></LinkEdit>
        <LinkEdit value={link} onChange={(e) => changeLink(e.target.value)}></LinkEdit>
      </div>
    }
  </TitleContainer>
}
const mapStateToProps = state => {
  return {
    articleOnEdit: getArticleOnEdit(state),
    linkOnEdit: getArticleOnEditLink(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editLink: (link) => dispatch(editArticleLink(link))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleLink);