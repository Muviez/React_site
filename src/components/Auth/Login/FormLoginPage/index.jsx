import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import FromLogin from '../FormLogErrors/index.jsx'

import Input from './InputLog.jsx'
import { LogIn } from '../../../../actions/user.js'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            State: {
                passwordState: "",
                loginState: "",
                emailState: "",
                loginEmailState: ""
            },
            login: {
                password: "",
                login: "",
                email: ""
            },
            restore: {
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

    // componentDidMount() {
    //     localStorage.setItem('JWT-Token', 'null');
    // }

    loginSubmit = event => {
        event.preventDefault();
        var State = this.state.State;
        
        var userData = this.state.login;

        console.log(userData);

        if(State["loginEmailState"] !== "has-success")
            State["loginEmailState"] = "has-danger";
        if(State["passwordState"] !== "has-success")
            State["passwordState"] = "has-danger";

        this.setState({State});

        if(State["loginEmailState"] === "has-success" && State["passwordState"] === "has-success") {
            localStorage.setItem('JWT-Token', 'token-x');
            axios.post('http://127.0.0.1:5000/api/auth/', userData).then(
                (response) => {
                    console.log(response);
                    
                    this.props.LogIn();
                    this.ss();
                }
            )
            .catch(
                (err) => {
                    console.log("err");
                }
            );
        }
    }

    restoreEmail(e){
        var State = this.state.State;
        this.state.restore.email = e.target.value;
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([A-z0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRex.test(e.target.value)){
            State["emailState"] = "has-success";
        } else {
            State["emailState"] = "has-danger";
        }
        this.setState({State});
    }

    restoreSubmit = event => {
        event.preventDefault();
        var State = this.state.State;
        if(State["emailState"] !== "has-success")
            State["emailState"] = "has-danger";
        this.setState({State});
        if(State["emailState"] === "has-success")
            console.log("all good");
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
                                        type="text" 
                                        placeholder="Username" 
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
                                        <a href='#' className="link footer-link" data-toggle="modal" data-target="#exampleModal">Need Help?</a>
                                    </h6>
                                </div>
                            </form>
                            <div className='modal fade' id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                                <div className='modal-dialog' role='document'>
                                    <div className='modal-content'>
                                        <div className='modal-header'>
                                            <h5 className='modal-title'>Восстановить пароль</h5>
                                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                            <span aria-hidden='true'>&times;</span>
                                            </button>
                                        </div>
                                        <div className='modal-body'>
                                            <form onSubmit={this.restoreSubmit}>
                                                <div className={"form-group " + this.state.State.emailState}>
                                                    <label>Email адрес</label>
                                                    <input type="email" 
                                                        className="form-control" 
                                                        placeholder="Введите Email"
                                                        onChange={(e) => this.restoreEmail(e)}
                                                    />
                                                </div>
                                                <button type='submit' className='btn btn-primary confPass'>Отправить</button>
                                            </form>
                                        </div>
                                        <div className='modal-footer'>
                                            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Закрыть</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state){
    return {
        user: state.loginUser.isLogged
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ LogIn: LogIn }, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);