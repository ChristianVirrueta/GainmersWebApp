import React, {Component} from 'react';
import {Button, Grid,Tab,Table,Flag,Icon} from 'semantic-ui-react';
import Layout from '../../components/layout';
import Choices from '../../components/choices';

const { Header, Row, HeaderCell, Body, Cell } = Table;

class QuarterFinals extends Component {
       
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
        <Flag className="Default" />TBD
        </div>
        <div className="block-flags">
        <Flag className="Default" />TBD
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />TBA        
            <Icon style={{padding: '0 10px'}}name='clock' />TBA
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
            <Flag className="Default" />TBD
            </div>
            <div className="block-flags">                          
            <Flag className="Default" />TBD
            </div>
            </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />TBA         
            <Icon style={{padding: '0 10px'}}name='clock' />TBA
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Default" />TBD
        </div>
        <div className="block-flags">
        <Flag className="Default" />TBD
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />TBA         
            <Icon style={{padding: '0 10px'}}name='clock' />TBA
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Default" />TBD
        </div>

        <div className="block-flags">
        <Flag className="Default" />
        TBD
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />TBA         
            <Icon style={{padding: '0 10px'}}name='clock' />TBA
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
        </Cell>
    </Row>

    
</Body>

</Table>     
    </Grid.Row>
   </Grid>

   <style>{`
      .quarter {
        background:#000000  !important;
        color:#ffffff !important;
      }
    `}</style>
   
  </Layout> 
  ); 

}

}

export default QuarterFinals;