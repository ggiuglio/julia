import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from "react-redux";
import { loadArticlesAction } from '../store/actions/actionsCreator';
import { getArticles, getUser } from '../store/selectors/selector';


const NewArticle = ({ articles, loadArticles, user }) => {
  

  return <div>
    {user ? <div>
      Add new article
    </div> : ''}

  </div>
}

const mapStateToProps = state => {
  return {
    articles: getArticles(state),
    user: getUser(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadArticles: () => dispatch(loadArticlesAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);