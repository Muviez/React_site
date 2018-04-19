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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis neque voluptatum labore voluptates earum excepturi quae facilis, corrupti repellat perspiciatis quia possimus accusamus repellendus ullam suscipit, voluptatibus dignissimos quibusdam praesentium consequuntur esse illo porro maxime obcaecati. Quasi cupiditate sunt iusto sit labore voluptates delectus. Autem, alias molestias nisi sapiente commodi at provident cumque excepturi maxime ut doloremque? Quas iusto suscipit optio ducimus, eaque labore repellendus ab architecto maxime provident soluta ut, quia illum aspernatur! Accusantium nihil ad voluptate animi sed sit maiores sequi, quam vitae veritatis, ea eos dolorem velit quae nostrum repellendus eligendi qui aperiam repudiandae incidunt! Debitis in necessitatibus optio delectus, magni eaque, minus mollitia vel ratione porro deleniti cum, laboriosam quaerat tempore tenetur dolor sed ipsa nihil.
            </TabPane>
            <TabPane tabId="ps2">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                <br/><br/>
                Dramatically maintain clicks-and-mortar solutions without functional solutions.
                Dramatically maintain clicks-and-mortar solutions without functional solutions.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum adipisci nemo distinctio est illum. Ut, sequi laboriosam vitae repellat animi optio fugiat excepturi quidem nulla atque nemo quas, maxime dolor. Alias delectus minus beatae eveniet perspiciatis, nemo iusto harum eos. Error culpa nostrum perferendis inventore corporis molestiae sint, ipsum maxime provident quos doloribus eum atque nobis iure, nesciunt totam non. Autem illum adipisci nemo maiores soluta et molestiae numquam debitis exercitationem, consequuntur tempora, quis aperiam cumque quo eius velit fugit asperiores quidem fuga, aliquid iusto nihil natus! Velit voluptatibus molestias id! Delectus incidunt doloribus quisquam sequi et. Eveniet consequuntur magni totam dicta possimus aliquam corrupti aperiam natus cupiditate iusto magnam voluptas in, dolore nihil deleniti.
            </TabPane>
            <TabPane tabId="ps3">
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                <br/><br/>
                Dynamically innovate resource-leveling customer service for state of the art customer service.
                Dynamically innovate resource-leveling customer service for state of the art customer service.
                Dynamically innovate resource-leveling customer service for state of the art customer service.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, nemo repellendus! Excepturi perferendis reprehenderit culpa eius ab veniam repellat ipsum a, vero sunt, nemo necessitatibus numquam aliquid labore unde blanditiis tempora asperiores earum quo corrupti ut amet. Ipsa eligendi impedit animi corporis ipsam quas error eos. Nisi et commodi explicabo! Dolorem deleniti recusandae aliquid alias corporis aut fugiat at. Neque quos, distinctio, reiciendis cupiditate molestias culpa aspernatur sint odit vitae explicabo inventore voluptas laboriosam officia asperiores quae consequuntur corrupti dolor ipsa id libero repudiandae. Velit ab facilis nesciunt, sapiente numquam iure, aspernatur amet quas at fuga

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