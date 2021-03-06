export const getBackground = state => state.selectedBackground;
export const getUser = state => state.user;
export const getLoginError = state => state.loginError;

//articles selectors
export const getArticles = state => state.articles;
export const getArticleOnEdit = state => state.articleOnEdit;
export const getArticleOnEditTitle = state => state.articleTitleEdit;
export const getArticleOnEditText = state => state.articleTextEdit;
export const getArticleOnEditLink = state => state.articleLinkEdit;
export const getNewArticleTitle = state => state.newArticleTitle;
export const getNewArticleText = state => state.newArticleText;
export const getNewArticleLink = state => state.newArticleLink;
export const getNewArticleFormStatus = state => state.showNewArticleForm;

//radio selectors
export const getRadios = state => state.radios;
