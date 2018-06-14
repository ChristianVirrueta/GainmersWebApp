import React, {Component} from 'react';
import {Button,Table,Flag,Icon} from 'semantic-ui-react';

class GroupA extends Component{
    render(){
const { Header, Row, HeaderCell, Body, Cell } = Table;

        return(
            <div>
<Table  color={'black'}  textAlign='center' inverted  >
<Header >
    <Row className="bg-header">
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
    <Cell textAlign='left'> <Flag className="Russia" />Rusia</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>5</Cell>
    <Cell>0</Cell>
    <Cell>5</Cell>
    <Cell style={{background : '#18191a'}} >3</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Saudi-arabia" />Saudi Arabia</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>5</Cell>
    <Cell>-5</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Egypt" />Egypt</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>
    </Row>

        <Row>
    <Cell textAlign='left'> <Flag className="Uruguay" />Uruguay</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>

    </Row>
</Body>

</Table>

<h3 className="titulo-match">Group Matches</h3>

<Table  color={'black'}  textAlign='center' inverted  >

<Body>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
        <Flag className="Russia" />Rusia
        </div>
        <div className="block-flags">
        <Flag className="Saudi-arabia" />Saudi Arabia
        </div>
        </Cell>
        <Cell className="txt">     
            <Icon style={{padding: '0 10px'}}name='clock' /> Full-Time <span style={{padding:'0 5px'}}>5-0</span>
        </Cell>
        <Cell>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
            <Flag className="Egypt" />Egypt
            </div>
            <div className="block-flags">                          
            <Flag className="Uruguay" />Uruguay
            </div>
            </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />15 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />07:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Russia" />Rusia
        </div>
        <div className="block-flags">
        <Flag className="Egypt" />Egypt
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />19 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Uruguay" />Uruguay
        </div>

        <div className="block-flags">
        <Flag className="Saudi-arabia" />
        Saudi Arabia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />20 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />10:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Uruguay" />Uruguay
        </div>

        <div className="block-flags">
        <Flag className="Russia" />
        Russia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />25 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Saudi-arabia" />Saudi Arabia
        </div>

        <div className="block-flags">
        <Flag className="Egypt" />
        Egypt
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />25 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
        </Cell>
    </Row>
    
</Body>

</Table>


</div>
        );
    }
}


export default GroupA;