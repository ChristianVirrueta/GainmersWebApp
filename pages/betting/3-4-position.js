import React, {Component} from 'react';
import {Button, Grid,Tab,Table,Flag,Icon} from 'semantic-ui-react';
import Layout from '../../components/layout';
import Choices from '../../components/choices';

const { Header, Row, HeaderCell, Body, Cell } = Table;

class NotWinners extends Component {
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
            <Flag name={'uru'} />Uruguay
            <div className="divider"></div>
            </div>
            <div className="block-flags">                          
            <Flag name={'egy'} />Egypt
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
      .places {
        background:#000000  !important;
        color:#ffffff !important;
      }
    `}</style>
        
       </Layout> 
       ); 
     
     }
     
     }

export default NotWinners;