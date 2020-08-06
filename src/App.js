import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route, Router} from 'react-router-dom';
import './App.css';
import Firebase from './firebase/firebase';
import createHistory from 'history/createBrowserHistory';
import Main from './main/main';
import About from './about/about';
import Home from './home/home';
import Articles from './articles/articles';
import Radios from './radio/radios';
import Login from './login/login'
import {chooseBackgroundAction, logoutAction, setUserAction} from './store/actions/actionsCreator';

export const history = createHistory()
export const FirebaseInstance = new Firebase();

class App extends Component {
    componentDidMount() {
        this.props.chooseBackground();
        FirebaseInstance.auth.onAuthStateChanged((user) => {
            this.props.setUser(user);
        });
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/julia'} component={Main}/>
                    <Route path={'/julia/about'} component={About}/>
                    <Route path={'/julia/articles'} component={Articles}/>
                    <Route path={'/julia/radio'} component={Radios}/>
                    <Route exact path={'/'} component={Home}/>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        chooseBackground: () => dispatch(chooseBackgroundAction()),
        logout: () => dispatch(logoutAction()),
        setUser: (user) => dispatch(setUserAction(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
