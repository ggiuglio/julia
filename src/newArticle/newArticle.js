import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from "react-redux";
import { loadArticlesAction, openNewArticleForm, resetNewArticle, editNewArticleImage } from '../store/actions/actionsCreator';
import { getArticles, getUser, getNewArticleFormStatus } from '../store/selectors/selector';
import NewArticleActionControls from './actionControls';
import NewArticleTitle from './newArticleTitle';
import NewArticleText from './newArticleText';
import NewArticleLink from './newArticleLink';
import addImage from '../assets/images/add.png';

const Container = styled.div`
  margin: 20px 0;
`;
const AddArticle = styled.div`
  height: 30px; 
  width: 100%;
  cursor: pointer;
  font-weight: bold;
`;
const AddArticleImage = styled.img`
  width: 30px;
  vertical-align: -8px;
  margin-right: 10px;
`;
const Article = styled.div`
  padding: 15px 5px;
  cursor: pointer;
  width: 100%;
  :last-child {
    margin-bottom: 20px;
  }
`;
const ArticleImage = styled.img`
  width: 100px;
  margin-right: 10px;
    @media (min-width: 600px) {
      width: 20vw;
    }
`;
const ArticleBody = styled.div`
  display: inline-flex;
  width: 100%;
`;
const ArticleContent = styled.div`
  align-items: top;
  font-size: 14px;
  flex-grow: 1;
  text-align: justify;
  box-sizing: border-box;
  @media (min-width: 600px) {
    padding-right: 20px;
  }
`;
const NewArticleIntor = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const ArticleActions = styled.div``;

const NewArticle = ({ user, showNew, showNewArticle, cancelNewArticle, editImage }) => {
  const [article, setArticle] = useState({});
  const [file, setFile] = useState(false);

  const handleFileSelection = (file) => {
      setFile(file);

      console.log(file);

      setFile(URL.createObjectURL(file));

      const articleImage = {
        image: file,
        src: file.name
      };
      editImage(articleImage);
  }

  return <Container>
    {user ? <div>
      {showNew ?
        <div>
          <NewArticleIntor>
            Insert new article
          </NewArticleIntor>
          <Article>
            <ArticleBody>
              <div>
                <div>
                  <input type="file" accept="image/*" onChange={e => handleFileSelection(e.target.files[0])} />
                </div>
                {file ? <ArticleImage src={file} /> : ''}
              </div>
              <ArticleContent>
                <NewArticleTitle article={article}></NewArticleTitle>
                <NewArticleText article={article}></NewArticleText>
                <NewArticleLink article={article}></NewArticleLink>
              </ArticleContent>
              <ArticleActions>
                <NewArticleActionControls article={article}></NewArticleActionControls>
              </ArticleActions>
            </ArticleBody>
          </Article>
        </div> :
        <AddArticle onClick={() => showNewArticle()}>
          <AddArticleImage src={addImage}></AddArticleImage>
          <span>Add new article</span>
        </AddArticle>
      }
    </div> : ''}

  </Container>
}

const mapStateToProps = state => {
  return {
    user: getUser(state),
    showNew: getNewArticleFormStatus(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showNewArticle: () => dispatch(openNewArticleForm()),
    cancelNewArticle: () => dispatch(resetNewArticle()),
    editImage: (image) => dispatch(editNewArticleImage(image))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);