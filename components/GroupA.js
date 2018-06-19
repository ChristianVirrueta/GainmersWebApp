import React, {Component} from 'react';
import {Button,Table,Flag,Icon} from 'semantic-ui-react';
import {Link} from '../routes';

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
    <Cell textAlign='left'> <Flag className="Russia" />Russia</Cell>
    <Cell>2</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>8</Cell>
    <Cell>1</Cell>
    <Cell>7</Cell>
    <Cell style={{background : '#18191a'}} >6</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Saudi-Arabia" />Saudi Arabia</Cell>
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
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>4</Cell>
    <Cell>-3</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>
    </Row>

        <Row>
    <Cell textAlign='left'> <Flag className="Uruguay" />Uruguay</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell style={{background : '#18191a'}}>3</Cell>

    </Row>
</Body>

</Table>

<h3 className="titulo-match">Group Matches</h3>

<Table  color={'black'}  textAlign='center' inverted  >

<Body>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
        <Flag className="Russia" />Russia
        </div>
        <div className="block-flags">
        <Flag className="Saudi-Arabia" />Saudi Arabia
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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>0-1</span>
        </Cell>
        <Cell>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Russia" />Russia
        </div>
        <div className="block-flags">
        <Flag className="Egypt" />Egypt
        </div>
        </Cell>
        <Cell className="txt">     
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>3-1</span>
        </Cell>
        <Cell>
        
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Uruguay" />Uruguay
        </div>

        <div className="block-flags">
        <Flag className="Saudi-Arabia" />
        Saudi Arabia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />20 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />10:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x1e1C28fD5230d7aa9AC06a0dbD50e28B900Ca75c'}>
            <a>
            <Button primary className="pool">
            Pool</Button>
            </a>
        </Link>
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
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x2b3730cB546C1056e8755064378AdFBe41aEa515'}>
            <a>
            <Button primary className="pool">
            Pool</Button>
            </a>
        </Link>
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Saudi-Arabia" />Saudi Arabia
        </div>

        <div className="block-flags">
        <Flag className="Egypt" />
        Egypt
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />25 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x50829dD8CE357D343BF0a25b88647328df4A976d'}>
            <a>
            <Button primary className="pool">
            Pool</Button>
            </a>
        </Link>
        </Cell>
    </Row>
    
</Body>

</Table>


</div>
        );
    }
}


export default GroupA;