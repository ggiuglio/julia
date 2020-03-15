import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router, Route } from 'react-router-dom';
import './App.css';
import { chooseBackground } from './store/actions/actionsCreator';
import createHistory from 'history/createBrowserHistory';
import About from './about/about';
import Home from './home/home';

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
        <Route path={'/'} component={Home} />
        <Route path={'/profile'} component={About} />
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
