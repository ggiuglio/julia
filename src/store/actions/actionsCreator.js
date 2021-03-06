import {
    CANCEL_ARTICLE_EDIT,
    CHOOSE_BACKGROUND,
    DELETE_ARTICLE_SUCCESS,
    EDIT_ARTICLE_LINK,
    EDIT_ARTICLE_SUCCESS,
    EDIT_ARTICLE_TEXT,
    EDIT_ARTICLE_TITLE,
    EDIT_NEW_ARTICLE_LINK,
    EDIT_NEW_ARTICLE_TEXT,
    EDIT_NEW_ARTICLE_TITLE,
    EDIT_NEW_ARTICLE_IMAGE,
    LOAD_ARTICLES,
    LOGIN_ERROR,
    OPEN_NEW_ARTICLE_FORM,
    RESET_LOGIN_ERROR,
    RESET_NEW_ARTICLE,
    SET_ARTICLE_ON_EDIT,
    SET_USER,
    LOAD_RADIOS
} from './actionsTypes.js'
import { FirebaseInstance, history } from '../../App';

export const chooseBackgroundAction = () => {
    return dispatch => {
        return dispatch({
            type: CHOOSE_BACKGROUND
        })
    }
}

export const loginAction = (username, password) => {
    return dispatch => {
        FirebaseInstance.doSignInWithEmailAndPassword(username, password)
            .then(() => {
                history.push('/julia/about')
            })
            .catch(() => {
                dispatch({
                    type: LOGIN_ERROR,
                    error: "Wrong username or password"
                })
            });
    }
}

export const resetLoginErrorAction = () => {
    return dispatch => {
        dispatch({
            type: RESET_LOGIN_ERROR
        });
    }
}

export const logoutAction = () => {
    return dispatch => {
        FirebaseInstance.doSignOut()
    }
}

export const setUserAction = (user) => {
    return dispatch => {
        dispatch({
            type: SET_USER,
            user: user ? { email: user.email } : null
        });
    }
}

//article actions

export const loadArticlesAction = () => {
    return dispatch => {
        return FirebaseInstance.articles.orderByChild('id').on('value', snapshot => {
            const articles = JSON.parse(JSON.stringify(snapshot.val()));

            const asyncCalls = [];
            Object.values(articles).map(art => {
                const urlRef = FirebaseInstance.storageRef.child(`article-images/${art.imageSrc}`)
                asyncCalls.push(urlRef.getDownloadURL().then(url => {
                    art.img = url;
                }));
            });

            Promise.all(asyncCalls).then(() => {
                return dispatch({
                    type: LOAD_ARTICLES,
                    articles: articles
                });
            });
        });
    }
}

export const setArticleOnEdit = (articleId) => {
    return dispatch => {
        dispatch({
            type: SET_ARTICLE_ON_EDIT,
            articleId: articleId
        });
    }
}

export const deleteArticleConfirm = (articleId) => {
    return dispatch => {

        FirebaseInstance.articles.once("child_removed", data => {
            const deletdArticle = JSON.parse(JSON.stringify(data.val()));
            const urlRef = FirebaseInstance.storageRef.child(`article-images/${deletdArticle.imageSrc}`).delete();
        })

        return FirebaseInstance.articles.child(articleId).remove().then(() => {
            return dispatch({
                type: DELETE_ARTICLE_SUCCESS
            })
        }).catch((r) => {
            console.log('error', r);
        });


    }
}

export const editArticleTitle = (title) => {
    return dispatch => {
        dispatch({
            type: EDIT_ARTICLE_TITLE,
            title: title
        });
    }
}

export const editArticleLink = (link) => {
    return dispatch => {
        dispatch({
            type: EDIT_ARTICLE_LINK,
            link: link
        });
    }
}

export const editArticleText = (text) => {
    return dispatch => {
        dispatch({
            type: EDIT_ARTICLE_TEXT,
            text: text
        });
    }
}

export const confirmArticleEdit = (articleFirebaseId) => {
    return (dispatch, getState) => {
        const article = getState().articles.find(article => article.firebaseId === articleFirebaseId);
        article.title = getState().articleTitleEdit ? getState().articleTitleEdit : article.title;
        article.text = getState().articleTextEdit ? getState().articleTextEdit : article.text;
        article.linkName = getState().articleLinkEdit && getState().articleLinkEdit.linkName ?
            getState().articleLinkEdit.linkName : article.linkName;
        article.link = getState().articleLinkEdit && getState().articleLinkEdit.link ?
            getState().articleLinkEdit.link : article.link;

        return FirebaseInstance.articles.child(article.firebaseId).update(article).then(() => {
            return dispatch({
                type: EDIT_ARTICLE_SUCCESS
            })
        });
    };
}

export const cancelArticleEdit = () => {
    return dispatch => {
        dispatch({
            type: CANCEL_ARTICLE_EDIT,
        });
    }
}

export const editNewArticleTitle = (title) => {
    return dispatch => {
        dispatch({
            type: EDIT_NEW_ARTICLE_TITLE,
            title: title
        });
    }
}

export const editNewArticleLink = (link) => {
    return dispatch => {
        dispatch({
            type: EDIT_NEW_ARTICLE_LINK,
            link: link
        });
    }
}

export const editNewArticleText = (text) => {
    return dispatch => {
        dispatch({
            type: EDIT_NEW_ARTICLE_TEXT,
            text: text
        });
    }
}

export const editNewArticleImage = (image) => {
    return dispatch => {
        dispatch({
            type: EDIT_NEW_ARTICLE_IMAGE,
            image: image
        });
    }
}

export const resetNewArticle = () => {
    return dispatch => {
        dispatch({
            type: RESET_NEW_ARTICLE,
        });
    }
}

export const createArticle = () => {
    return (dispatch, getState) => {

        if (getState().newArticleImage &&
            getState().newArticleImage.image &&
            getState().newArticleLink &&
            getState().newArticleLink.linkName &&
            getState().newArticleLink.link &&
            getState().newArticleText &&
            getState().newArticleTitle) {

            const article = {
                title: getState().newArticleTitle,
                text: getState().newArticleText,
                link: getState().newArticleLink.link,
                linkName: getState().newArticleLink.linkName,
                imageSrc: getState().newArticleImage.src
            };

            const ImageRef = FirebaseInstance.storageRef.child(`/article-images/${getState().newArticleImage.src}`);
            ImageRef.put(getState().newArticleImage.image).then(() => {
                return FirebaseInstance.articles.push(article).then(() => {
                    dispatch({
                        type: RESET_NEW_ARTICLE,
                    });
                });
            })
        }
    };
}

export const openNewArticleForm = () => {
    return dispatch => {
        dispatch({
            type: OPEN_NEW_ARTICLE_FORM,
        });
    }
}

//radio actions

export const loadRadiosAction = () => {
    return dispatch => {
        return FirebaseInstance.radios.orderByChild('id').on('value', snapshot => {
            const radios = JSON.parse(JSON.stringify(snapshot.val()));
            return dispatch({
                type: LOAD_RADIOS,
                radios: radios
            });
        });
    }
}
