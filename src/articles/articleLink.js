import React from 'react';
import { connect } from "react-redux";
import { editArticleLink } from '../store/actions/actionsCreator';
import { getArticleOnEdit, getArticleOnEditLink } from '../store/selectors/selector';
import EditableLink from '../common/editableLink';

const ArticleLink = ({ article, articleOnEdit, editLink, linkOnEdit }) => {

  return <EditableLink
    article={article}
    articleOnEdit={articleOnEdit}
    editLink={editLink}
    linkOnEdit={linkOnEdit}>
  </EditableLink>
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