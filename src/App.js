import React, {Component} from 'react';
import { connect } from "react-redux";
import { Router, Route } from 'react-router-dom';
import './App.css';
import { teatAction } from './store/actions/actionsCreator';
import { getTest } from './store/selectors/selector';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory()
//export const FirebaseInstance = new Firebase();

class App extends Component {
 componentDidMount() {
   this.props.loadTest();
// FirebaseInstance.auth.onAuthStateChanged((user) => {
//   this.props.setUser(user);
// });
}

  render() {
    return (
      <div>
       {
        this.props.test
       }
       <div onClick={e => this.props.loadTest()}>click</div>
       {/* <Router history={history}>
          <Route path={'/login'} component={Login} />
          <Route path={'/prodotti'} component={Catalogue} />
          <Route path={'/nuovo-prodotto'} component={NewProduct} />
          <Route path={'/import'} component={ImportData} />
          <Route exact path={'/'} component={Catalogue} />
        </Router> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    test: getTest(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadTest: () =>  dispatch(teatAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
