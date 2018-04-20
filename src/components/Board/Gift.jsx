import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { DeleteGift } from '../../actions/Gift.js'

class Gift extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div key={this.props.id ? this.props.id : ""}>
                <div className="info">
                <button className="remove-gift-btn" onClick={() => this.props.DeleteGift(this.props.id)}><i className="now-ui-icons ui-1_simple-remove"></i></button>
                    <div className="description">
                        <h4 className="info-title">Подарок {this.props.id ? this.props.id : ""}</h4>
                        <p>Категория: {this.props.category ? this.props.category : ""}</p>
                        <p>Предмет: {this.props.item ? this.props.item : ""}</p>
                        <p>Количество: {this.props.count ? this.props.count : ""}</p>

                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, { }, { DeleteGift: DeleteGift }), dispatch)
};

export default connect(null, mapDispatchToProps)(Gift);