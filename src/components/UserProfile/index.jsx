import React, { Component } from 'react';
import {
    Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';
// import axios from 'axios';
import { connect } from 'react-redux';

import CardAuthor  from './Components/CardAuthor.jsx';
import CardSocials from './Components/CardSocials.jsx';
import EditForm from './Components/EditForm.jsx';
import Button from './Components/CustomButton.jsx';
import Panels from './Components/Panels.jsx'
import TabMenu from './Components/TabMenu.jsx'
import { ChangeProfile } from "../../actions/userProfile.js";

const User = (props) => {

    const ChangeProfFunc = () => {
        console.log(props.upProf)
        props.ChngProf();
    }



    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <Card>
                            <CardHeader>
                                {props.upProf && <h5 className="title">Edit Profile</h5>}
                                {!props.upProf && <TabMenu />}
                            </CardHeader>
                            <CardBody>
                                {/* {console.log(props.upProf)} */}
                                {props.upProf && <EditForm />}
                                {!props.upProf  && <Panels />}
                            </CardBody>
                        </Card>
                    </div>
                    <Col md={3}  xs={12}>
                        <Card className="card-user">
                            <div className="image">
                                <img src={localStorage.bg} alt="..."/>
                            </div>
                            <CardBody>
                                <CardAuthor
                                    avatar={localStorage.avatar}
                                    title={props.profileData.firstName && props.profileData.lastName ? props.profileData.firstName + " " + props.profileData.lastName : "No info"}
                                    description={props.profileData.login ? props.profileData.login : "No info"}
                                />
                                <p className="description text-left">
                                    Email address: {props.profileData.email ? props.profileData.email : "No info"} <br/>
                                    Phone: {props.profileData.phone ? props.profileData.phone : "No info"} <br/>
                                    Address: {props.profileData.address ? props.profileData.address : "No info"}
                                </p>
                            </CardBody>
                            {!props.upProf && <Button fill className="btn btn-primary" type="button" onClick={ChangeProfFunc}>Change Profile</Button> }
                        </Card>
                    </Col>
                </div>
            </div>
        </div>
    );

}

function mapStateToProps(state){
    return {
        upProf: state.userProfile.changeProfile,
        profileData: state.userProfile.profileInformation
    }
};

function mapDispatchToProps(dispatch) {
    return {
        ChngProf: () => {
            dispatch(ChangeProfile());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);