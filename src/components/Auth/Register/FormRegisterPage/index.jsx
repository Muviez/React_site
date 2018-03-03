import React, { Component } from 'react';
import axios from 'axios';

import Input from './InputReg.jsx'
import {registerEmail} from '../../../ValidationForm.jsx';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            State: {
                emailState: "",
                passwordState: "",
                confirmState: "",
                loginState: ""
            },
            register: {
                email: "",
                password: "",
                confirm: "",
                username: ""
            }
        };
    }

    registerUsername(e){
        var State = this.state.State;
        this.state.register.username = e.target.value;
        if(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/.test(e.target.value) ){
            State["loginState"] = "has-success";
        } else {
            State["loginState"] = "has-danger";
        }
        this.setState({State});
    }

    registerEmail(e){
        var State = this.state.State;

        this.state.register.email = e.target.value;

        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([A-z0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRex.test(e.target.value)){
            State["emailState"] = "has-success";
        } else {
            State["emailState"] = "has-danger";
        }

        this.setState({State});
    }

    registerPassword(e){

        var State = this.state.State;

        this.state.register.password = e.target.value;

        if(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(e.target.value)) {
            State["passwordState"] = "has-success";
        } else {
            State["passwordState"] = "has-danger";
        }
        if(this.state.register.password === this.state.register.confirm && this.state.register.confirm){
            State["confirmState"] = "has-success";
        } else {
            State["confirmState"] = "has-danger";
        }

        this.setState({State});
    }
    
    registerConfirm(e){
        var State = this.state.State;

        this.state.register.confirm = e.target.value;

        if(this.state.register.password === this.state.register.confirm && this.state.register.confirm){
            State["confirmState"] = "has-success";
        } else {
            State["confirmState"] = "has-danger";
        }
        this.setState({State});
    }
    
    registerSubmit = event => {
        event.preventDefault();

        var State = this.state.State;

        var userData = new Object();
        userData.email = this.state.register.email;
        userData.username = this.state.register.username;
        userData.password = this.state.register.password;

        if(State["loginState"] !== "has-success")
            State["loginState"] = "has-danger";
        if(State["emailState"] !== "has-success")
            State["emailState"] = "has-danger";
        if(State["passwordState"] !== "has-success")
            State["passwordState"] = "has-danger";
        if(State["confirmState"] !== "has-success")
            State["confirmState"] = "has-danger";

        this.setState({State});

        if(State["loginState"] === "has-success" && State["emailState"] === "has-success" 
          && State["passwordState"] === "has-success" && State["confirmState"] === "has-success") {
            console.log("ALL GOOD");
            console.log(userData);
          
            axios.post('http://127.0.0.1:5000/api/auth/register/', userData).then(
                (response) => {
                    console.log(response);
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
        }
    }

    render() {
        return (
            <div className='content'>
                <div className="full-page-content">
                    <div className="register-page">
                        <div className="container-fluid">
                            <div className="justify-content-center row">
                                <div className="col-11 col-sm-10 col-md-6 col-lg-5">
                                    <div className="info-area info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="now-ui-icons media-2_sound-wave"></i>
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Marketing</h5>
                                            <p className="description">We've created the marketing campaign of the website. It was a very interesting collaboration.</p>
                                        </div>
                                    </div>
                                    <div className="info-area info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="now-ui-icons media-1_button-pause"></i>
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Fully Coded in React 16</h5>
                                            <p className="description">We've developed the website with React 16, HTML5 and CSS3. The client has access to the code using GitHub.</p>
                                        </div>
                                    </div>
                                    <div className="info-area info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="now-ui-icons users_single-02"></i>
                                        </div>
                                        <div className="description">
                                            <h5 className="info-title">Built Audience</h5>
                                            <p className="description">There is also a Fully Customizable CMS Admin Dashboard for this product.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-11 col-sm-7 col-md-8 col-lg-5 col-xl-4">
                                    <div className="card-signup card">
                                        <div className="text-center card-header">
                                            <h4 className="card-title">Register</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.registerSubmit}>
                                                <div className={ "input-group "  + this.state.State.loginState  }>
                                                    <div className="input-group-addon">
                                                        <i className="now-ui-icons icons-form users_circle-08"></i>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Username"
                                                        className="form-control"
                                                        onChange={(e) => this.registerUsername(e)}
                                                    />
                                                </div>
                                                <div className={ "input-group " + this.state.State.emailState }>
                                                    <div className="input-group-addon">
                                                        <i className="now-ui-icons icons-form ui-1_email-85"></i>
                                                    </div>
                                                    <input 
                                                        type="email"
                                                        placeholder="Email"
                                                        className="form-control"
                                                        onChange={(e) => this.registerEmail(e)}
                                                    />
                                                </div>
                                                <div className={ "input-group " + this.state.State.passwordState }>
                                                    <div className="input-group-addon">
                                                        <i className="now-ui-icons icons-form ui-1_lock-circle-open"></i>
                                                    </div>
                                                    <input 
                                                        type="password"
                                                        placeholder="Password"
                                                        className="form-control"
                                                        onChange={(e) => this.registerPassword(e)}
                                                    />
                                                </div>
                                                <div className={ "input-group " + this.state.State.confirmState }>
                                                    <div className="input-group-addon">
                                                        <i className="now-ui-icons icons-form ui-1_lock-circle-open"></i>
                                                    </div>
                                                    <input 
                                                        type="password" 
                                                        placeholder="Confirm password" 
                                                        className="form-control"
                                                        onChange={(e) => this.registerConfirm(e)}
                                                    />
                                                </div>
                                                
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="checkbox" className="form-check-input" value="on" />
                                                        <span className="form-check-sign"></span>
                                                        <div>I agree to the <a href="#something">terms and conditions</a>.</div>
                                                    </label>
                                                </div>
                                                <div className="text-center card-footer">
                                                    <button type='submit' className="btn-round btn btn-primary btn-lg">Get Started</button>
                                                </div>
                                            </form>
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


export default Register;