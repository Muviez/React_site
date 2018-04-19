import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './Card.jsx';
import GiftModal from './GiftModal.jsx';

class ReminderGrid extends React.Component {
    constructor(props) {
        super(props);

    }

    
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.reminder.map(function(key, obj){

                            return (
                                <Card 
                                    key={key.id}
                                    id={key.id}
                                    title={key.title}
                                    datetime={key.datetime}
                                    reason={key.reason}
                                    towhom={key.towhom}
                                    frequency={key.frequency}
                                    remindForWeek={key.remindForWeek}
                                    remindForMonth={key.remindForMonth}
                                    remindForThreeMonth={key.remindForThreeMonth}
                                    // present={key.gifts}
                                />
                            );
                        })}
                        <GiftModal cardId={this.props.cardId.activeCardId} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        reminder: state.reminderReducer,
        cardId: state.cardIdReducer
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AddCard: AddCard }, dispatch)
};

export default connect(mapStateToProps, null)(ReminderGrid);