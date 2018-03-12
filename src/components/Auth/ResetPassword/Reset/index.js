import React from 'react';

import { takeToken } from "../../../../utils/takeToken.js";

class Reset extends React.Component {
    
    componentDidMount() {
        localStorage.setItem("resetToken", takeToken());
        localStorage.setItem("resetTimestamp", Date.now());
        this.context.router.history.push('/reset-password');
    }
    
    render() {
        return null;
    }
}

Reset.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Reset;