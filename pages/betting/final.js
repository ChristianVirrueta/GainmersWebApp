import React, {Component} from 'react';
import {Button, Grid,Tab,Table,Flag,Icon} from 'semantic-ui-react';
import Layout from '../../components/layout';
import Choices from '../../components/choices';
import {Link} from '../../routes';

const { Header, Row, HeaderCell, Body, Cell } = Table;

class Finals extends Component {
       
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
        <a>
            <Button primary className="pool">
            Pool</Button>
        </a>
        </Cell>
    </Row>
    

    
</Body>

</Table>     
    </Grid.Row>
   </Grid>

   <style>{`
      .grandfinal{
        background:#000000  !important;
        color:#ffffff !important;
      }
    `}</style>
   
  </Layout> 
  ); 

}

}

export default Finals;