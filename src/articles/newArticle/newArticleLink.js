import React from 'react';
import { connect } from "react-redux";
import { editNewArticleLink } from '../../store/actions/actionsCreator';
import { getNewArticleLink } from '../../store/selectors/selector';
import EditableLink from '../../common/editableLink';

const NewArticleLink = ({ editLink, link }) => {
const newArticle = {firebaseId: '000', link: "", linkName: ""}
  return <EditableLink
    id="000"
    article={newArticle}
    articleOnEdit='000'
    editLink={editLink}
    linkOnEdit=''
    linkPlaceholder="Insert new artilce link"
    linkNamePlaceholder="Insert new article link text">
  </EditableLink>
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editLink: (link) => dispatch(editNewArticleLink(link))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticleLink);