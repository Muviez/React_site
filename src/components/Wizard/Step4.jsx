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
                <h5 className="info-text"> Step 3 </h5>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10}>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={4}>
                                <IconCheckbox
                                    name="job"
                                    value="Anonymous order"
                                    icon="now-ui-icons design-2_ruler-pencil"
                                    title="Anonymous order"
                                />
                            </Col>
                            <Col xs={12} sm={4}>
                                <div className={"choice" + (this.state.checkedPersDataState)} onClick={() => this.setCheck()}>
                                    <input type="checkbox" name="job" value="Consent to the processing of personal data" ref="checkbox"/>
                                    <div className="icon">
                                        <i className="now-ui-icons business_bulb-63"></i>
                                    </div>
                                    <h6>Consent to the processing of personal data</h6>
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