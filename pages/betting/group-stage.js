import React, {Component} from 'react';
import {Button, Grid,Tab} from 'semantic-ui-react';
import Layout from '../../components/layout';
import GroupA from '../../components/GroupA';
import GroupB from '../../components/GroupB';
import Choices from '../../components/choices';

const panes = [
    { menuItem: 'Group A', render: () => <Tab.Pane attached={false}><GroupA/></Tab.Pane> },
    { menuItem: 'Group B', render: () => <Tab.Pane attached={false}><GroupB/></Tab.Pane> },
    { menuItem: 'Group C', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Group D', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Group E', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Group F', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Group G', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Group H', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
    
]
const { Column, Row } = Grid;

class GroupStage extends Component {
    
       
render() {

   return (
    <Layout>
        <Grid container stackable verticalAlign='middle' >       
            <Row centered >
                <Choices/>
            </Row>
            <Row centered>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </Row>
   </Grid>
   
  </Layout> 
  ); 

}

}

export default GroupStage;