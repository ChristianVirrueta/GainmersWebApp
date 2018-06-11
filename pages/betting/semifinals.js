import React, {Component} from 'react';
import {Button, Grid,Tab,Table,Flag,Icon} from 'semantic-ui-react';
import Layout from '../../components/layout';
import Choices from '../../components/choices';

const { Header, Row, HeaderCell, Body, Cell } = Table;

class SemiFinals extends Component {
       
render() {

   return (
    <Layout>
        <Grid container stackable verticalAlign='middle' >       
            <Grid.Row centered >
                <Choices/>
            </Grid.Row>
            <Grid.Row centered>
                
<Table  color={'black'}  textAlign='center' inverted  >

<Body>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
        <Flag name={'Russia'} />Rusia
        <div className="divider"></div>
        </div>
        <div className="block-flags">
        <Flag name={'Saudi-arabia'} />Saudi Arabia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />14 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />18:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            <Button className="room">
            Room</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
            <Flag name={'Uruguay'} />Uruguay
            <div className="divider"></div>
            </div>
            <div className="block-flags">                          
            <Flag name={'Egypt'} />Egypt
            </div>
            </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />14 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />18:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            <Button className="room">
            Room</Button>
        </Cell>
    </Row>

    
</Body>

</Table>     
    </Grid.Row>
   </Grid>

   <style>{`
      .semi {
        background:#000000  !important;
        color:#ffffff !important;
      }
    `}</style>
   
  </Layout> 
  ); 

}

}

export default SemiFinals;