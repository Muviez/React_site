import React, { Component } from 'react';
// react component used to create charts
import SweetAlert from 'react-bootstrap-sweetalert';

import { Link } from 'react-router-dom';

class Step5 extends Component{
    render(){
        return (
            <div className="wizard-step">
                <h2 className="text-center text-space">
                    Yuhuuu!
                    <br />
                    <small> Click on "<b>Finish</b>" to join our community</small>
                </h2>
                <div className="wizard-finish-button">
                    <Link to="/" className="btn btn-secondary close-button">Finish</Link>
                </div>
            </div>
        );
    }
}

export default Step5;