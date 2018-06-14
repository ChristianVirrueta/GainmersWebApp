import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;

const GroupB = ()=>{

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
    <Cell textAlign='left'> <Flag className="Portugal" />Portugal</Cell>
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
    <Cell textAlign='left'> <Flag className="Spain" />Spain</Cell>
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
    <Cell textAlign='left'> <Flag className="Morocco" />Morocco</Cell>
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
    <Cell textAlign='left'> <Flag className="Iran" />Iran</Cell>
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
        <Flag className="Morocco" />Morocco
        </div>
        <div className="block-flags">
        <Flag className="Iran" />Iran
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />15 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />10:00 GMT-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
            <Flag className="Portugal" />Portugal
            </div>
            <div className="block-flags">                          
            <Flag className="Spain" />Spain
            </div>
            </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />15 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Portugal" />Portugal
        </div>
        <div className="block-flags">
        <Flag className="Morocco" />Morocco
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />20 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />19:00 GMT-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Iran" />Iran
        </div>

        <div className="block-flags">
        <Flag className="Spain" />
        Spain
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />20 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Spain" />Spain
        </div>

        <div className="block-flags">
        <Flag className="Morocco" />
        Morocco
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />25 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Button primary className="pool">
            Pool</Button>
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Iran" />Iran
        </div>

        <div className="block-flags">
        <Flag className="Portugal" />
        Portugal
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />25 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
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


export default GroupB;