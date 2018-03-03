import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { connect } from 'react-redux';

import App from './App.jsx';
import Home from './components/Home/index.jsx';
import Login from './components/Auth/Login/FormLoginPage/index.jsx';
import Register from './components/Auth/Register/FormRegisterPage/index.jsx';
import ValidationForms from './components/ValidationForm.jsx';

// import checkAuth from './checkAuth.jsx';

const checkAuth = () => {
    const token = localStorage.getItem('JWT-Token');
    if(!token)
        return false;

    try {
        if(token == "null")
            return false;
    }
    catch(e) {
        return false;
    }
    return true;
}

const AuthRouter = ({ component: Component }) => (
    <Route
        render={props => 
            checkAuth() ? (
                    <Component {...props} />
            ) : (
                <Redirect 
                    to={{
                        pathname: '/login'
                    }}
                />
            )
        }
    />
);

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='register' component={Register} />
        <Route path='login' component={Login} />
        <AuthRouter path='validation' component={ValidationForms} />
    </Route>
);