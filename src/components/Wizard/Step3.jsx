import React from 'react';
import {
    Row, Col,
    FormGroup, Label, Input,
    InputGroup
} from 'reactstrap';

class Step3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address: "",
            city: "",
            country: "",
            date: "",
            time: "",
            addressState: "",
            cityState: "",
            countryState: "",
            dateState: "",
            timeState: ""
        };
        this.cityChange = this.cityChange.bind(this);
    }
    addressChange(e){
        this.setState({
            address: e.target.value
        });
        if(e.target.value.length > 7){
            this.setState({
                addressState: " has-success"
            });
        } else {
            this.setState({
                addressState: " has-danger"
            });
        }
    }
    cityChange(e){
        this.setState({
            city: e.target.value
        });
        if(e.target.value.length > 4){
            this.setState({
                cityState: " has-success"
            });
        } else {
            this.setState({
                cityState: " has-danger"
            });
        }
    }
    countryChange(e){
        this.setState({
            country: e.target.value
        });
        if(e.target.value.length > 4){
            this.setState({
                countryState: " has-success"
            });
        } else {
            this.setState({
                countryState: " has-danger"
            });
        }
    }
    dateChange(e){
        this.setState({
            date: e.target.value
        });
        if(/([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})/.test(e.target.value)){
            this.setState({
                dateState: " has-success"
            });
        } else {
            this.setState({
                dateState: " has-danger"
            });
        }
    }
    timeChange(e){// (([0-1]\\d)|(2[0-3])):([0-5]\\d):([0-5]\\d)
        this.setState({
            time: e.target.value
        });
        if(/^(?!.*777.*$)([0-9]{2}[:]{1}[0-9]{2})$/.test(e.target.value)){
            this.setState({
                timeState: " has-success"
            });
        } else {
            this.setState({
                timeState: " has-danger"
            });
        }
    }
    isValidated(){
        if(this.state.addressState !== " has-success" || this.state.cityState !== " has-success" || this.state.countryState !== " has-success" || this.state.dateState !== " has-success" || this.state.timeState !== " has-success"){
            this.setState({
                addressState: " has-danger",
                cityState: " has-danger",
                countryState: " has-danger",
                dateState: " has-danger",
                timeState: " has-danger"
            });
            return false;
        }
        return true;
    }
    render(){
        return (
            <div className="Step_3">
                <h5 className="info-text">Step 2</h5>
                <Row className="justify-content-center">
                    <Col xs={12} sm={5}>
                        <Label>City</Label>
                        <InputGroup size="md" className={(this.state.cityState ? this.state.cityState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons location_world"></i>
                            </div>
                            <Input defaultValue={this.state.city} type="text" placeholder="City (required)" name="firstname" onFocus={(e) => this.setState({firstnameFocus: true})} onBlur={(e) => this.setState({firstnameFocus: false})} onChange={(e) => this.cityChange(e)}/>
                        </InputGroup>
                    </Col>
                    <Col xs={12} sm={5}>
                        <Label>Country</Label>
                        <InputGroup size="md" className={(this.state.countryState ? this.state.countryState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons location_world"></i>
                            </div>
                            <Input defaultValue={this.state.сountry} type="text" placeholder="Country (required)" name="firstname" onFocus={(e) => this.setState({firstnameFocus: true})} onBlur={(e) => this.setState({firstnameFocus: false})} onChange={(e) => this.countryChange(e)}/>
                        </InputGroup>
                    </Col>        
                    <Col xs={12} sm={10}>
                        <Label>Address</Label>
                        <InputGroup size="md" className={(this.state.addressState ? this.state.addressState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons location_pin"></i>
                            </div>
                            <Input defaultValue={this.state.address} type="text" placeholder="Address (required)" name="firstname" onFocus={(e) => this.setState({firstnameFocus: true})} onBlur={(e) => this.setState({firstnameFocus: false})} onChange={(e) => this.addressChange(e)}/>
                        </InputGroup>
                    </Col>

                    <Col xs={12} sm={5}>
                        <Label>Date</Label>
                        <InputGroup size="md" className={(this.state.dateState ? this.state.dateState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons ui-1_calendar-60"></i>
                            </div>
                            <Input defaultValue={this.state.date} type="text" placeholder="12.12.2018 (required)" name="firstname" onFocus={(e) => this.setState({firstnameFocus: true})} onBlur={(e) => this.setState({firstnameFocus: false})} onChange={(e) => this.dateChange(e)}/>
                        </InputGroup>
                    </Col>
                    <Col xs={12} sm={5}>
                        <Label>Time</Label>
                        <InputGroup size="md" className={(this.state.timeState ? this.state.timeState:"")}>
                            <div className="input-group-addon">
                                <i className="now-ui-icons tech_watch-time"></i>
                            </div>
                            <Input defaultValue={this.state.time} type="text" placeholder="00:00 (required)" name="firstname" onFocus={(e) => this.setState({firstnameFocus: true})} onBlur={(e) => this.setState({firstnameFocus: false})} onChange={(e) => this.timeChange(e)}/>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Step3;