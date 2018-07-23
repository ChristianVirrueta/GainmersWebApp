import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;
import {Link} from '../server/routes';

const GroupF = ()=>{

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
    <HeaderCell className="points">Points</HeaderCell>


    </Row>
</Header>
<Body>
<Row>
    <Cell textAlign='left'> <Flag className="Mexico" />Mexico</Cell>
    <Cell>2</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>3</Cell>
    <Cell>1</Cell>
    <Cell>2</Cell>
    <Cell className="points" style={{background : '#18191a'}}>6</Cell>

    </Row>
    <Row >
    <Cell textAlign='left'> <Flag className="Germany" />Germany</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>2</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell className="points" style={{background : '#18191a'}} >3</Cell>

    </Row>
 <Row>
    <Cell textAlign='left'> <Flag className="Sweden" />Sweden</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>2</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell className="points" style={{background : '#18191a'}}>3</Cell>
    </Row>

        <Row>
    <Cell textAlign='left'> <Flag className="Korea" />Korea</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>3</Cell>
    <Cell>-2</Cell>
    <Cell className="points" style={{background : '#18191a'}}>0</Cell>

    </Row>
</Body>

</Table>

<h3 className="titulo-match">Group Matches</h3>

<Table  color={'black'}  textAlign='center' inverted  >

<Body>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
        <Flag className="Germany" />Germany
        </div>
        <div className="block-flags">
        <Flag className="Mexico" />Mexico
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
            <Flag className="Sweden" />Sweden
            </div>
            <div className="block-flags">                          
            <Flag className="Korea" />Korea
            </div>
            </Cell>
        <Cell className="txt">
                     
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>1-0</span>
        </Cell>
        <Cell>
            
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Korea" />Korea
        </div>
        <div className="block-flags">
        <Flag className="Mexico" />Mexico
        </div>
        </Cell>
        <Cell className="txt">
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>1-2</span>
        </Cell>
        <Cell>
            
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Germany" />Germany
        </div>

        <div className="block-flags">
        <Flag className="Sweden" />
        Sweden
        </div>
        </Cell>
        <Cell className="txt">         
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>2-1</span>
        </Cell>
        <Cell>
            
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Korea" />Korea
        </div>

        <div className="block-flags">
        <Flag className="Germany" />
        Germany
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />27 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0xc8a7B1F98e0DCc0FaCcb1284F6236cB20ca6CB95'}>
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
        <Flag className="Mexico" />Mexico
        </div>

        <div className="block-flags">
        <Flag className="Sweden" />
        Sweden
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />27 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GMT-5
        </Cell>
        <Cell>
           <Link route={'/betting/final/0x52F5cFf35823B4D6fdF479700d56C383635D73d9'}>
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


export default GroupF;