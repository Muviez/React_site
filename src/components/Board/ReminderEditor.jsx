import React from 'react'

import {
    Row, Col
} from 'reactstrap';
import FormInputs from '../../FormInputs.jsx';
import Select from 'react-select';
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddCard } from '../../actions/addReminder.js';

const Month = [
'01',
'02',
'03',
'04',
'05',
'06',
'07',
'08',
'09',
'10',
'11',
'12'
];

const frequencyOfReminder = [
    { value: 'one-time', label: 'Разовое событие' },
    { value: 'every-month', label: 'Каждый месяц' },
    { value: 'every-year', label: 'Каждый год' }
];

const reasonSelect = [
    { value: 'newYear',      label: 'Новый Год'},
    { value: 'birthday',     label: 'День Рождения'},
    { value: 'anniversary',  label: 'Юбилей'},
    { value: 'valentineDay', label: '14 Февраля'},
    { value: 'womenDay',     label: '8 Марта'},
    { value: 'defenderDay',  label: '23 Февраля'},
    { value: 'wedding',      label: 'Свадьба'},
    { value: 'knowledgeDay', label: '1 Сентября'},
    { value: 'springDay',    label: '1 Мая'},
    { value: 'victoryDay',   label: '9 Мая'},
    { value: 'yearly',       label: 'Годовщина'}
];

const whomSelect = [
    { value: 'mother',       label: 'Маме'},
    { value: 'father',       label: 'Папе'},
    { value: 'wife',         label: 'Жене'},
    { value: 'husband',      label: 'Мужу'},
    { value: 'boyfriend',    label: 'Парню'},
    { value: 'girlfriend',   label: 'Девушке'},
    { value: 'friend',       label: 'Другу'},
    { value: 'femalefriend', label: 'Подруге'},
    { value: 'brother',      label: 'Брату'},
    { value: 'sister',       label: 'Сестре'},
    { value: 'grandmother',  label: 'Бабушке'},
    { value: 'grandfather',  label: 'Дедушке'},
    { value: 'aunt',         label: 'Тёте'},
    { value: 'uncle',        label: 'Дядя'},
    { value: 'boss',         label: 'Шефу'},
    { value: 'employees',    label: 'Cотрудникам'},
    { value: 'colleague',    label: 'Коллеге'}
];


const date = new Date();

const curDate = date.getDate() + "/" + Month[date.getMonth()] + "/" + date.getFullYear();

class ReminderEditor extends React.Component {
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

            ReminderInputs: {
                title: "",
                reason: "",
                towhom: "",
                datetime: "",
                frequency: "",
                remindForWeek: false,
                remindForMonth: false,
                remindForThreeMonth: false
            }
        }

    }

    AddCardFunc = e => {
        this.props.AddCard(this.state.ReminderInputs);
    }
   
    changeDate = () => {
        let d = this.state.ReminderInputs;
        d.datetime = document.getElementById("datatimepicker").value;
        this.setState({ d });
    }

    changeCheckbox = (event) => {
        let state = this.state.ReminderInputs;
        switch(event.target.name) {
            case "remindForWeek":
                state.remindForWeek = event.target.checked;
                this.setState({state});
                break;
            case "remindForMonth":
                state.remindForMonth = event.target.checked;
                this.setState({state});
                break;
            case "remindForThreeMonth":
                state.remindForThreeMonth = event.target.checked;
                this.setState({state});
                break;
        }
    }

    changeTitle = (event) => {
        let state = this.state.ReminderInputs;
        state.title = event.target.value;
        this.setState({state});
    }

    changeReason = (value) => {
        let state = this.state.ReminderInputs;
        state.reason = value.value;
        this.setState({state});
    }

    changeToWhom = (value) => {
        let state = this.state.ReminderInputs;
        state.towhom = value.value;
        this.setState({state});
    }

    changeFrequency = (value) => {
        let state = this.state.ReminderInputs;
        state.frequency = value.value;
        this.setState({state});
    }

    render() {
        return (
            // <div className="container-fluid">
            //     <div className="row">               
            //         <Col md={4}>
                        <div className="card">
                            <div className="card-body card_content">
                                <form>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                        <i className="now-ui-icons icons-form users_circle-08"></i>
                                        </span>
                                        <input name="title" onChange={(value) => this.changeTitle(value)} type="text" className="form-control" placeholder="Заголовок" />
                                    </div>
                                    <Select
                                        placeholder="Повод"
                                        name="reason"
                                        value={this.state.ReminderInputs.reason}
                                        options={reasonSelect}
                                        onChange={(value) => this.changeReason(value)}
                                        className="my-4"
                                    />
                                    <Select
                                        placeholder="Кому"
                                        name="toWhom"
                                        value={this.state.ReminderInputs.towhom}
                                        options={whomSelect}
                                        onChange={(value) => this.changeToWhom(value)}
                                        className="my-4"
                                    />
                                    <Row className="mb-5">
                                        <Col xs={5} >
                                            <Datetime
                                                dateFormat="DD/MM/YYYY"
                                                locale="ru"
                                                inputProps={{placeholder:"   Дата и время", id: "datatimepicker"}}
                                                onBlur={() => this.changeDate()}
                                            />
                                        </Col> 
                                        <Col xs={7} className="pl-1">
                                            <Select
                                                placeholder="  Переодичность напоминаний"
                                                name="frequency"
                                                value={this.state.ReminderInputs.frequency}
                                                options={frequencyOfReminder}
                                                onChange={(value) => this.changeFrequency(value)}
                                            />
                                        </Col>
                                    </Row>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input name="remindForWeek" onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" />
                                            <span className="form-check-sign"></span>
                                            <div>За неделю</div>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input name="remindForMonth" onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" />
                                            <span className="form-check-sign"></span>
                                            <div>За месяц</div>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input name="remindForThreeMonth" onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" />
                                            <span className="form-check-sign"></span>
                                            <div>За 3 месяца</div>
                                        </label>
                                    </div>                         
                                </form>
                            </div>
                            <div className="card-footer">
                                <button 
                                    className="btn btn-primary" 
                                    type="button"
                                    onClick={this.AddCardFunc}
                                >Add card</button>
                            </div>
                        </div>
            //         </Col>
            //     </div>
            // </div>
        );
    }
}


function mapStateToProps(state){
    return {
        addCardRem: state.addReminder
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AddCard: AddCard }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ReminderEditor);