import React from 'react'
import { connect } from 'react-redux'

function checkAuth(props) {
    const token = localStorage.getItem("JWT-Token");
    if(true)
        return console.log("access is closed" + props.user);
    else
        return console.log("access is done" + props.user);
}

function mapStateToProps(state){
    return {
        user: state.loginUser.isLogged
    }
};

export default connect(mapStateToProps)(checkAuth)