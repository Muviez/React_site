// isLogged = true
// post -> /logout/ -> isLogged = false


// function mapDispatchToProps(dispatch) {
//     return {
//         LogoutUser: () => {
//             dispatch(LogOut());
//         }
//     }
// }



import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MenuItem } from './MenuItem.jsx';
import { LogOut } from '../../actions/user.js';

LogoutFunc = (props) => {
    this.props.LogoutUser()
    localStorage.setItem('JWT-Token', 'null');
}

function Header(props) {
    return (
        <nav className="navbar-transparent navbar-absolute navbar navbar-expand-lg">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                    <button className="navbar-toggler" data-target="#navbarNav" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <Link className="navbar-brand header_desc-logo" to="/">Lendlease</Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="ml-auto navbar-nav">
                        <MenuItem content="Dashboard" link="" icon="design_bullet-list-67"  />
                        {!props.user && <MenuItem content="Register" link="register" icon="tech_mobile" /> }
                        {!props.user && <MenuItem content="Login" link="login" icon="users_circle-08"  /> }
                        {props.user && <MenuItem content="Profile" link="" icon="business_badge"  /> }
                        {props.user &&
                            <li className="nav-item">
                                <a onClick={() => this.LogoutFunc(props)} className="nav-link">
                                    <i className="now-ui-icons sport_user-run"></i>
                                    Logout
                                </a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        LogoutUser: () => {
            dispatch(LogOut());
        }
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ LogOut: LogOut }, dispatch)
// };

function mapStateToProps(state){
    return {
        user: state.loginUser.isLogged
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
