import React, {Component} from 'react';
import {Button,Table,Flag,Icon} from 'semantic-ui-react';

class GroupA extends Component{
    render(){
const { Header, Row, HeaderCell, Body, Cell } = Table;

        return(
            <div>
<Table  color={'black'}  textAlign='center' inverted  >
<Header >
    <Row style={{background : '#5B5A5E'}}>
    <HeaderCell  width={3}   />
    <HeaderCell>MP</HeaderCell>
    <HeaderCell>W</HeaderCell>
    <HeaderCell>D</HeaderCell>
    <HeaderCell>L </HeaderCell>
    <HeaderCell>GF</HeaderCell>
    <HeaderCell>GA</HeaderCell>
    <HeaderCell>+/-</HeaderCell>
    <HeaderCell >Points</HeaderCell>


    </Row>
</Header>
<Body>
<Row >
    <Cell textAlign='left'> <Flag name={'ru'} />Rusia</Cell>
    <Cell >0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#5B5A5E'}} >0</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag name={'sa'} />Saudi Arabia</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#5B5A5E'}}>0</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag name={'eg'} />Egypt</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#5B5A5E'}}>0</Cell>
    </Row>

        <Row>
    <Cell textAlign='left'> <Flag name={'uy'} />Uruguay</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#5B5A5E'}}>0</Cell>

    </Row>
</Body>

</Table>

<h3 style={{textAlign : 'left'}}>Group Matches</h3>

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
    <Row>
        <Cell textAlign='center'> <Flag name={'ru'} />Rusia -
        <Flag style={{padding: '1px'}}name={'uy'} />Uruguay</Cell>
        <Cell style={{background : '#5B5A5E'}} >
            <Icon  name='calendar' />14 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />18:00 GTM-5
        </Cell>
        <Cell>
            <Button primary  >
            Pool</Button>
            <Button >
            Room</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> <Flag name={'eg'} />Egypt -<Flag style={{padding: '1px'}} name={'sa'} />Saudi Arabia</Cell>
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


</div>
        );
    }
}


export default GroupA;