import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router, Route } from 'react-router-dom';
import './App.css';
import { chooseBackground } from './store/actions/actionsCreator';
import createHistory from 'history/createBrowserHistory';
import Main from './main/main';
import About from './about/about';
import Home from './home/home';
import Print from './print/print';

export const history = createHistory()
//export const FirebaseInstance = new Firebase();

class App extends Component {
  componentDidMount() {
    this.props.chooseBackground();
    // FirebaseInstance.auth.onAuthStateChanged((user) => {
    //   this.props.setUser(user);
    // });
  }

  render() {
    return (
      <Router history={history}>
        <Route path={'/julia'} component={Main} />
        <Route path={'/julia/about'} component={About} />
        <Route path={'/julia/print'} component={Print} />
        <Route exact path={'/'} component={Home} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    chooseBackground: () => dispatch(chooseBackground())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
