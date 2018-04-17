import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './components/Home/index.jsx';
import Login from './components/Auth/Login/FormLoginPage/index.jsx';
import Register from './components/Auth/Register/FormRegisterPage/index.jsx';
import Reset from "./components/Auth/ResetPassword/Reset/index.js";
import ResetPassword from "./components/Auth/ResetPassword/FormResetPassPage/index.jsx";
import Confirm from './components/Auth/Confirm/index.js'
import User from './components/UserProfile/index.jsx';
import Wizard from './components/Wizard/Wizard.jsx';
import Board from "./components/Board/index.jsx";

const Rootrouter = () => {

    const checkAuth = () => {
        const token = localStorage.getItem('JWToken');
        if(token) {
            return true;
        } else {
            return false;
        }
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                checkAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                    to="/login"
                    />
                )
            }
        />
    );

    const IsAuth = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                checkAuth() ? (
                    <Redirect
                    to="/profile"
                    />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );

    return (
        <Router>
            <Layout>
                <Route exact path='/' component={Home} />
                <IsAuth path='/register' component={Register} />
                <IsAuth path='/login' component={Login} />
                <IsAuth path='/reset' component={Reset} />
                <IsAuth path='/reset-password' component={ResetPassword} />
                <IsAuth path='/confirm' component={Confirm} />
                <IsAuth path='/one-time-order' component={Wizard} />
                <PrivateRoute path='/profile' component={User} />
                <IsAuth path='/board' component={Board} />
            </Layout>
        </Router>
    );
}

export default Rootrouter;