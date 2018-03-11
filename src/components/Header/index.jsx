import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MenuItem } from './MenuItem.jsx';
import { LogOut, logout } from '../../actions/user.js';

class Header extends Component {
    render(props) {
    
    const LogoutFunc = () => {
        this.props.LogoutUser()
        logout();
        this.context.router.history.push('/login')
    }
    const isAuthenticated = this.props.user;

    const userLinks = (
        <ul className="ml-auto navbar-nav">
            <MenuItem content="Dashboard" link="" icon="design_bullet-list-67"  />
            <MenuItem content="Protected Page" link="protected" icon="tech_mobile" />
            <MenuItem content="Profile" link="profile" icon="business_badge"  />
            <li className="nav-item">
                <a onClick={LogoutFunc} className="nav-link">
                    <i className="now-ui-icons sport_user-run"></i>
                    Logout
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul className="ml-auto navbar-nav">
            <MenuItem content="Dashboard" link="" icon="design_bullet-list-67"  />
            <MenuItem content="Register" link="register" icon="tech_mobile" />
            <MenuItem content="Login" link="login" icon="users_circle-08"  />
        </ul>
    );

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
                    { isAuthenticated ? userLinks : guestLinks }
                </div>
            </div>
        </nav>
    );
}
}

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}

// Function method
function mapDispatchToProps(dispatch) {
    return {
        LogoutUser: () => {
            dispatch(LogOut());
        }
    }
}

function mapStateToProps(state){
    return {
        user: state.loginUser.isLogged
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
