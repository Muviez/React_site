import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ReminderGrid extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.addCardRem.map(function(key, obj){
                        console.log("OBJECT: " + key.title);
                        return (
                            <div className="col-lg-4 mb-4">
                                <div className="card" data-background-color="orange">
                                    <div className="card-body content-danger">
                                        <h5 className="category-social">
                                            {key.title}
                                        </h5>
                                        <h4 className="card-title">
                                            <a href="#nuk">{key.datetime}</a>
                                        </h4>
                                        <p className="card-description">
                                            {key.reason} : {key.towhom}
                                        </p>
                                        <div className="card-footer text-center">
                                            <a href="#pablo" className="btn btn-default btn-round">Add Gift</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        addCardRem: state.addReminder
    }
};

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ AddCard: AddCard }, dispatch)
// };

export default connect(mapStateToProps)(ReminderGrid);