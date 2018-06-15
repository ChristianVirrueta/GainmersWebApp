import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;
import {Link} from '../routes';

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
    <HeaderCell >Points</HeaderCell>


    </Row>
</Header>
<Body>
<Row >
    <Cell textAlign='left'> <Flag className="Germany" />Germany</Cell>
    <Cell >0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#18191a'}} >0</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Mexico" />Mexico</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Sweden" />Sweden</Cell>
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
    <Cell textAlign='left'> <Flag className="Korea" />Korea</Cell>
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
        <Flag className="Germany" />Germany
        </div>
        <div className="block-flags">
        <Flag className="Mexico" />Mexico
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />17 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />10:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x6161C3671F8aC3973F2c104AFF21885B661E5813'}>
            <Button primary className="pool">
            Pool</Button>
        </Link>
            
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
            <Icon  name='calendar' />18 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />07:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0xB4F7f1609170C557c716a1d5f0eb2076798A37dc'}>
            <Button primary className="pool">
            Pool</Button>
        </Link>
            
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
            <Icon  name='calendar' />23 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />10:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0xD548cf4bEEb29ed3877B5937DD5219A707e96422'}>
            <Button primary className="pool">
            Pool</Button>
        </Link>
            
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
            <Icon  name='calendar' />23 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x35e6bDedA7C1709d6a14212F0f3563Fadd7BF3f3'}>
            <Button primary className="pool">
            Pool</Button>
        </Link>
            
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
            <Button primary className="pool">
            Pool</Button>
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
            <Button primary className="pool">
            Pool</Button>
        </Link>
            
        </Cell>
    </Row>
    
</Body>

</Table>
</div>
       
);

}


export default GroupF;