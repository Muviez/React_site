import React, { Component } from 'react';
// react component used to create charts
import SweetAlert from 'react-bootstrap-sweetalert';

import { Link } from 'react-router-dom';

class Step5 extends Component{
    render(){
        return (
            <div className="wizard-step">
                <h2 className="text-center text-space">
                    Вы дошли до конца!
                    <br />
                    <small> Нажмите "<b>Готово</b>" чтобы завершить заказ</small>
                </h2>
                <div className="wizard-finish-button">
                    <Link to="/" className="btn btn-secondary close-button">Готово</Link>
                </div>
            </div>
        );
    }
}

export default Step5;