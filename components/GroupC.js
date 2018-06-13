import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;

const GroupC = ()=>{

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
    <Cell textAlign='left'> <Flag className="France" />France</Cell>
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
    <Cell textAlign='left'> <Flag className="Australia" />Australia</Cell>
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
    <Cell textAlign='left'> <Flag className="Peru" />Peru</Cell>
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
    <Cell textAlign='left'> <Flag className="Denmark" />Denmark</Cell>
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
        <Flag className="France" />France
        </div>
        <div className="block-flags">
        <Flag className="Australia" />Australia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />16 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />17:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
            <Flag className="Peru" />Peru
            </div>
            <div className="block-flags">                          
            <Flag className="Denmark" />Denmark
            </div>
            </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />16 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />11:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Denmark" />Denmark
        </div>
        <div className="block-flags">
        <Flag className="Australia" />Australia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />21 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />19:00 GTM-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="France" />France
        </div>

        <div className="block-flags">
        <Flag className="Peru" />
        Peru
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />21 Jun 2018         
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
        <Flag className="Australia" />Australia
        </div>

        <div className="block-flags">
        <Flag className="Peru" />
        Peru
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />26 Jun 2018         
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
        <Flag className="Denmark" />Denmark
        </div>

        <div className="block-flags">
        <Flag className="France" />
        France
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />26 Jun 2018         
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


export default GroupC;