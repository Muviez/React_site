import React from 'react'
import Select from 'react-select';
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { frequencyOfReminder, reasonSelect, whomSelect } from "./selectArrays.js";
import { EditCard } from './../../actions/ReminderCard.js'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,

            ReminderInputs: {
                title: this.props.title,
                reason: this.props.reason,
                towhom: this.props.towhom,
                datetime: this.props.datetime,
                frequency: this.props.frequency,
                remindForWeek: this.props.remindForWeek,
                remindForMonth: this.props.remindForMonth,
                remindForThreeMonth: this.props.remindForThreeMonth
            }
        }
    }
    
    editingCard = () => {
        this.setState({ editing: true })
    }

    saveCard = () => {
        this.setState({ editing: false })
        this.props.EditCard(this.props.id, this.state.ReminderInputs);
        console.log("TEST" + this.props.EditCard)
        console.log("REDUCER STATE" + this.props.reminder)
    }

    changeDate = () => {
        let d = this.state.ReminderInputs;
        d.datetime = document.getElementById("datatimepicker").value;
        this.setState({ d });
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

    renderDisplay = () => {
        return(
            <div className="col-lg-4 mb-4">
                <div className="card card-notify" data-background-color="orange">
                    <div className="card-body content-danger">
                        <h5 className="category-social">
                            {this.state.ReminderInputs.title}
                        </h5>
                        <button className="edit-card" onClick={this.editingCard}><i className="now-ui-icons ui-1_settings-gear-63"></i></button>
                        <h4 className="card-title">
                            <a href="#nuk">{this.state.ReminderInputs.datetime}</a>
                        </h4>
                        <p className="card-description">
                            {this.state.ReminderInputs.reason} : {this.state.ReminderInputs.towhom}
                        </p>
                        <div className="card-footer text-center">
                            <button className="btn btn-default btn-round">Add Gift</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    renderFormEditing = () => {
        return(
            <div className="col-lg-4 mb-4">
                <div className="card card-notify">
                    <div className="card-body content-danger">
                        <input type="text" className="form-control" onChange={(value) => this.setState({ title: value })} defaultValue={this.state.ReminderInputs.title}/>
                        <Datetime
                            dateFormat="DD/MM/YYYY"
                            locale="ru"
                            inputProps={{placeholder:"   Дата и время", id: "datatimepicker"}}
                            defaultValue={this.props.datetime}
                            onBlur={() => this.changeDate()}
                            className="my-4"
                        />
                        <Select
                            placeholder="Повод"
                            name="reason"
                            value={this.state.ReminderInputs.reason}
                            options={reasonSelect}
                            onChange={(value) => this.changeReason(value)}
                            className="my-4"
                            clearable={false}
                        />
                        <Select
                            placeholder="Кому"
                            name="toWhom"
                            value={this.state.ReminderInputs.towhom}
                            options={whomSelect}
                            onChange={(value) => this.changeToWhom(value)}
                            className="my-4"
                        />
                        <Select
                            placeholder="  Переодичность напоминаний"
                            name="frequency"
                            value={this.state.ReminderInputs.frequency}
                            options={frequencyOfReminder}
                            onChange={(value) => this.changeFrequency(value)}
                            className="my-4"
                        />
                        <div className="form-check">
                            <label className="form-check-label">
                                <input name="remindForWeek" onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" checked={this.props.remindForWeek} />
                                <span className="form-check-sign"></span>
                                <div>За неделю</div>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input name="remindForMonth" onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" checked={this.props.remindForMonth} />
                                <span className="form-check-sign"></span>
                                <div>За месяц</div>
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input name="remindForThreeMonth" onChange={(e) => this.changeCheckbox(e)} type="checkbox" className="form-check-input" value="on" checked={this.props.remindForThreeMonth} />
                                <span className="form-check-sign"></span>
                                <div>За 3 месяца</div>
                            </label>
                        </div>
                        <div className="card-footer text-center">
                            <button onClick={this.saveCard} className="btn btn-default btn-round">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.state.editing ? this.renderFormEditing() : this.renderDisplay();
    }
}

function mapStateToProps(state){
    return {
        reminder: state.reminderReducer
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ EditCard: (id, ReminderInputs) => EditCard }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);