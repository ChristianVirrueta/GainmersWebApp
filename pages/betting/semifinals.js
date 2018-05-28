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
        <Cell textAlign='center'> <Flag name={'ru'} />Rusia -<Flag style={{padding: '1px'}} name={'sa'} />Saudi Arabia</Cell>
        <Cell style={{background : '#5B5A5E'}} >
            <Icon  name='calendar' />14 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />18:00 GTM-5
        </Cell>
        <Cell>
            <Button primary  >
            Pool</Button>
            <Button  >
            Room</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'>
            <Flag name={'uy'} />Uruguay -                            
            <Flag  style={{padding: '1px'}} name={'eg'} />Egypt</Cell>
        <Cell style={{background : '#5B5A5E'}} >
            <Icon  name='calendar' />14 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />18:00 GTM-5
        </Cell>
        <Cell>
            <Button primary  >
            Pool</Button>
            <Button  >
            Room</Button>
        </Cell>
    </Row>

    
</Body>

</Table>     
    </Grid.Row>
   </Grid>
   
  </Layout> 
  ); 

}

}

export default SemiFinals;