import React from 'react';
import {
    TabContent, TabPane, Card, CardHeader, CardTitle, CardBody, Row, Col, //Nav, NavItem, NavLink,
} from 'reactstrap';
import { connect } from 'react-redux';

import TabMenu from './TabMenu.jsx';

function Panels(props) { 
    return (
        <TabContent className="tab-space tab-subcategories" activeTab={props.pageSub}>
            <TabPane tabId="ps1">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                <br/><br/>
                Dramatically maintain clicks-and-mortar solutions without functional solutions.
            </TabPane>
            <TabPane tabId="ps2">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                <br/><br/>
                Dramatically maintain clicks-and-mortar solutions without functional solutions.
                Dramatically maintain clicks-and-mortar solutions without functional solutions.
            </TabPane>
            <TabPane tabId="ps3">
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                <br/><br/>
                Dynamically innovate resource-leveling customer service for state of the art customer service.
                Dynamically innovate resource-leveling customer service for state of the art customer service.
                Dynamically innovate resource-leveling customer service for state of the art customer service.
            </TabPane>
        </TabContent>
    );
}

function mapStateToProps(state){
    return {
        pageSub: state.userProfile.pageSubcategories
    }
};

export default connect(mapStateToProps)(Panels);

//<TabContent className="tab-space tab-subcategories" activeTab={this.state.pageSubcategories}>