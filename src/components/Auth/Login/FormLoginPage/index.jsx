import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import FromLogin from '../FormLogErrors/index.jsx'
import Restore from '../../Restore/FormRestorePage/index.jsx';
import Input from './InputLog.jsx';
import { LogIn, login } from '../../../../actions/user.js';
import { setAuthorizationToken } from "../../../../utils/setAuthorizationToken.js";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            State: {
                passwordState: "",
                loginState: "",
                loginEmailState: ""
            },
            login: {
                password: "",
                login: "",
                email: ""
            },
            loginError: "",
            passwordError: "",

            user: "???"
        };
    }

    ss = () => {
        this.setState({ user: this.msg() });
    }

    gs = () => {
        this.ss();
    }

    loginUser(e){
        var State = this.state.State;
        this.state.login.login = e.target.value;
        if(/^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/.test(e.target.value) ){
            State["loginState"] = "has-success";
        } else {
            State["loginState"] = "has-danger";
        }
        this.setState({State});
    }

    loginEmail(e){
        var State = this.state.State;

        this.state.login.email = e.target.value;

        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([A-z0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRex.test(e.target.value)){
            State["loginEmailState"] = "has-success";
        } else {
            State["loginEmailState"] = "has-danger";
        }

        this.setState({State});
    }

    loginPassword(e){
        var State = this.state.State;
        this.state.login.password = e.target.value;
        if(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(e.target.value)){
            State["passwordState"] = "has-success";
        } else {
            State["passwordState"] = "has-danger";
        }
        this.setState({State});
    }

    loginSubmit = event => {
        event.preventDefault();
        var State = this.state.State;
        
        var userData = this.state.login;

        // console.log(userData);

        if(State["loginEmailState"] !== "has-success")
            State["loginEmailState"] = "has-danger";
        if(State["passwordState"] !== "has-success")
            State["passwordState"] = "has-danger";

        this.setState({State});
        console.log(userData)
        if(State["loginEmailState"] === "has-success" && State["passwordState"] === "has-success") {
            login(userData)
            .then(res => {
                localStorage.setItem('JWToken', res.data.token);
                setAuthorizationToken(res.data.token);
                this.props.LogIn();
                this.ss();
                this.context.router.history.push('/');
            })
            .catch(err => {
                console.log("ERROR_LOGIN: " + err);
            })
            
        }
    }

    msg = () => {
        console.log("THIS IS STATE OF USER:" + this.props.user)
        if(!this.props.user)
            return "FALSE";
        else
            return "SUCCESS"
    }

    render() {
        // const { user } = this.props;
        return (
            <div className='content'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-7 col-lg-5 col-sm-9 col-10'>
                            <form onSubmit={this.loginSubmit} className='section-auth_form'>
                                <div className='form-group section-auth_form-headText'>
                                    <h2>Вход</h2>
                                </div>
                                <div className={"input-group " + this.state.State.loginEmailState}>
                                    <div className="input-group-addon">
                                        <i className="now-ui-icons icons-form users_circle-08"></i>
                                    </div>
                                    <input 
                                        type="email" 
                                        placeholder="Email" 
                                        className="form-control"
                                        onChange={(e) => this.loginEmail(e)}
                                    />
                                </div>
                                <p>{this.state.loginError}</p>
                                <div className={"input-group " + this.state.State.passwordState}>
                                    <div className="input-group-addon">
                                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                    </div>
                                    <input 
                                        type="password" 
                                        placeholder="Password" 
                                        className="form-control"
                                        onChange={(e) => this.loginPassword(e)}
                                    />
                                    
                                </div>
                                <h1>{this.state.user}</h1>
                                <button type="button" onClick={() => this.gs()}>get state</button>
                                <button type='submit' className='btn-round btn btn-primary btn-lg btn-block btn-login'>Войти</button>
                                <div className="pull-left">
                                    <h6>
                                        <Link to="/register" className="link footer-link">Create Account</Link>
                                    </h6>
                                </div>
                                <div className="pull-right">
                                    <h6>
                                        <a href='#' className="link footer-link" data-toggle="modal" data-target="#exampleModal">Forgot password?</a>
                                    </h6>
                                </div>
                            </form>
                            <Restore />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        user: state.loginUser.isLogged
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ LogIn: LogIn }, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);