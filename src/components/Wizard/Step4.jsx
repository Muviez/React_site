import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import IconCheckbox from './IconCheckbox.jsx';

class Step4 extends React.Component{
    constructor() {
        super();
        this.state = {
            checkedPersDataState: ""
        }
    }

    setCheck = () => {
        if(this.state.checkedPersDataState !== ""){
            this.setState({
                checkedPersDataState: ""
            });
        } else {
            this.setState({
                checkedPersDataState: " active"
            });
        }
    }
    isValidated(){
        if(this.state.checkedPersDataState !== " active"){
            return false;
        }
        return true;
    }

    render(){
        return (
            <div>
                <h5 className="info-text"> Шаг 4 </h5>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10}>
                        <Row className="justify-content-center">
                            <Col xs={6} sm={4}>
                                <IconCheckbox
                                    name="job"
                                    value="Анонимный заказ"
                                    icon="now-ui-icons design-2_ruler-pencil"
                                    title="Анонимный заказ"
                                />
                            </Col>
                            <Col xs={6} sm={4}>
                                <div className={"choice" + (this.state.checkedPersDataState)} onClick={() => this.setCheck()}>
                                    <input type="checkbox" name="job" value="Согласие на обработку персональных данных" ref="checkbox"/>
                                    <div className="icon">
                                        <i className="now-ui-icons business_bulb-63"></i>
                                    </div>
                                    <h6>Согласие на обработку персональных данных</h6>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Step4;