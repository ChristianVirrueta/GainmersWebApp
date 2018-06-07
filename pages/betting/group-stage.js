import React, {Component} from 'react';
import {Button, Grid,Tab} from 'semantic-ui-react';
import Layout from '../../components/layout';
import GroupA from '../../components/GroupA';
import GroupB from '../../components/GroupB';
import GroupC from '../../components/GroupC';
import GroupD from '../../components/GroupD';
import GroupE from '../../components/GroupE';
import GroupF from '../../components/GroupF';
import GroupG from '../../components/GroupG';
import GroupH from '../../components/GroupH';
import Choices from '../../components/choices';

const panes = [
    { menuItem: 'Group A', render: () => <Tab.Pane attached={false}><GroupA/></Tab.Pane> },
    { menuItem: 'Group B', render: () => <Tab.Pane attached={false}><GroupB/></Tab.Pane> },
    { menuItem: 'Group C', render: () => <Tab.Pane attached={false}><GroupC/></Tab.Pane> },
    { menuItem: 'Group D', render: () => <Tab.Pane attached={false}><GroupD/></Tab.Pane> },
    { menuItem: 'Group E', render: () => <Tab.Pane attached={false}><GroupE/></Tab.Pane> },
    { menuItem: 'Group F', render: () => <Tab.Pane attached={false}><GroupF/></Tab.Pane> },
    { menuItem: 'Group G', render: () => <Tab.Pane attached={false}><GroupG/></Tab.Pane> },
    { menuItem: 'Group H', render: () => <Tab.Pane attached={false}><GroupH/></Tab.Pane> },
    
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

                <Tab menu={{ secondary: true, pointing: true}} panes={panes}  />
            </Row>
   </Grid>

   <style>{`
      .group-stage {
        background:#000000  !important;
        color:#ffffff !important;
      }
    `}</style>
   
  </Layout> 


  ); 

}

}

export default GroupStage;