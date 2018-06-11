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
            <Flag className="Uruguay" />Uruguay
            <div className="divider"></div>
            </div>
            <div className="block-flags">                          
            <Flag className="Egypt" />Egypt
            </div>
            </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />14 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />18:00 GTM-5
        </Cell>
        <Cell>
        <Link route={`/betting/0xfDa63B5daD31B7e38Bf22371B95d3D3A43eDB827`}>
        <a>
            <Button primary className="pool">
            Pool</Button>
        </a>
        </Link>
            <Button className="room">
            Room</Button>
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