import React, { Component } from 'react';
// react component used to create charts
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Step_5 } from '../../actions/WizardStep.js';

// import { Link } from 'react-router-dom';

class Step5 extends Component{

    finishOrder = () => {
        console.log(this.props.StepFinish())
    }

    render(){
        return (
            <div className="wizard-step">
                <h2 className="text-center text-space">
                    Вы дошли до конца!
                    <br />
                    <small> Нажмите "<b>Готово</b>" чтобы завершить заказ</small>
                </h2>
                <div className="wizard-finish-button">
                    <button onClick={this.finishOrder} className="btn btn-secondary close-button">Готово</button>
                </div>
                {/* <button className="btn-finish"></button> */}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ StepFinish: Step_5 }, dispatch)
};

export default connect(null, mapDispatchToProps)(Step5);