import React from 'react'

import ReminderEditor from './ReminderEditor.jsx';
import ReminderGrid from './ReminderGrid.jsx';

class Board extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <ReminderEditor />
                        
                    </div>
                    <div className="col-lg-8">
                        <ReminderGrid />
                    </div>
                </div>
            </div>            
        );
    }

}

export default Board;