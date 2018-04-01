import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormInputs  from './../../../FormInputs.jsx';
import Button from './CustomButton.jsx';

import { SaveProfile, SaveProfData } from '../../../actions/userProfile.js';

class EditForm extends Component {
    constructor() {
        super();
        this.state = {
            State: {
                loginState: "",
                emailState: "",
                EmailState: "",
                phoneState: "",
                firstNameState: "",
                lastNameState: "",
                addressState: ""
            },

            userProf: {
                login: "",
                email: "",
                phone: "",
                firstName: "",
                lastName: "",
                address: ""
            }
        }
    }

    componentDidMount() {
        var userProf = this.state.userProf;
        userProf.login = document.getElementById("login").value
        userProf.email = document.getElementById("email").value
        userProf.phone = document.getElementById("phone").value
        userProf.firstName = document.getElementById("firstName").value
        userProf.lastName = document.getElementById("lastName").value
        userProf.address = document.getElementById("address").value
        this.setState({userProf})
    }

    SaveProfFunc = e => {
        this.props.SaveProfData(this.state.userProf);
        this.props.SaveProfile();
    }
    
    loginUser(e){
        var State = this.state.State;
        var userProf = this.state.userProf;
        userProf.login = e.target.value;
        if(/^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/.test(e.target.value) ){
            State["loginState"] = "has-success";
        } else {
            State["loginState"] = "has-danger";
        }
        this.setState({State});
    }

    emailUser(e){
        var userProf = this.state.userProf;
        userProf.email = e.target.value;
        this.setState({userProf});   
    }
    phoneUser(e){
        var userProf = this.state.userProf;
        userProf.phone = e.target.value;
        this.setState({userProf});   
    }
    firstNameUser(e){
        var userProf = this.state.userProf;
        userProf.firstName = e.target.value;
        this.setState({userProf});   
    }
    lastNameUser(e){
        var userProf = this.state.userProf;
        userProf.lastName = e.target.value;
        this.setState({userProf});   
    }
    addressUser(e){
        var userProf = this.state.userProf;
        userProf.address = e.target.value;
        this.setState({userProf});
    }

    render() {
        return(
            <form>
                <FormInputs
                    ncols = {["col-md-3 pr-1" , "col-md-4 px-1" , "col-md-5 pl-1"]}
                    proprieties = {[
                        {
                            label : "Username",
                            inputProps : {
                                type : "text",
                                placeholder: "Username",
                                id: "login",
                                defaultValue: this.props.profileData.login,
                                className: this.state.State.loginState,
                                onChange: (e) => this.loginUser(e)
                            }
                        },
                        {
                            label : "Email address",
                            inputProps : {
                                type : "email",
                                placeholder: "Email",
                                id: "email",
                                defaultValue: this.props.profileData.email,
                                onChange: (e) => this.emailUser(e)
                            }
                        },
                        {
                            label : "Phone",
                            inputProps : {
                                type : "text",
                                placeholder: "Phone",
                                id: "phone",
                                defaultValue: this.props.profileData.phone,
                                onChange: (e) => this.phoneUser(e)
                            }
                        }
                    ]}
                />

                <FormInputs
                    ncols = {["col-md-6 pr-1" , "col-md-6 pl-1"]}
                    proprieties = {[
                        {
                            label : "First Name",
                            inputProps : {
                                type : "text",
                                placeholder: "First Name",
                                id: "firstName",
                                defaultValue: this.props.profileData.firstName,
                                onChange: (e) => this.firstNameUser(e)
                            }
                        },
                        {
                            label : "Last Name",
                            inputProps : {
                                type : "text",
                                placeholder: "Last Name",
                                id: "lastName",
                                defaultValue: this.props.profileData.lastName,
                                onChange: (e) => this.lastNameUser(e)
                            }
                        }
                    ]}
                />
                <FormInputs
                    ncols = {["col-md-12"]}
                    proprieties = {[
                        {
                            label : "Address",
                            inputProps : {
                                type : "text",
                                placeholder: "Home Address",
                                id: "address",
                                defaultValue: this.props.profileData.address,
                                onChange: (e) => this.addressUser(e)
                            }
                        }
                    ]}
                />
                <Button
                    className="btn btn-primary"
                    fill
                    type="button"
                    onClick={this.SaveProfFunc}
                    
                >
                    Save Profile
                </Button>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {
        upProf: state.userProfile.changeProfile,
        profileData: state.userProfile.profileInformation
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ SaveProfile: SaveProfile, SaveProfData: SaveProfData}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);