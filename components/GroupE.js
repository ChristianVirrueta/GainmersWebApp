import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;
import {Link} from '../routes';

const GroupE = ()=>{

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
    <Cell textAlign='left'> <Flag className="Brazil" />Brazil</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>0 </Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#18191a'}} >1</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Switzerland" />Switzerland</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell style={{background : '#18191a'}}>1</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Costa-Rica" />Costa Rica</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>-1</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>
    </Row>

        <Row>
    <Cell textAlign='left'> <Flag className="Serbia" />Serbia</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
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
        <Flag className="Costa-Rica" />Costa Rica
        </div>
        <div className="block-flags">
        <Flag className="Serbia" />Serbia
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
            <Flag className="Brazil" />Brazil
            </div>
            <div className="block-flags">                          
            <Flag className="Switzerland" />Switzerland
            </div>
            </Cell>
        <Cell className="txt">       
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>1-1</span>
        </Cell>
        <Cell>
            
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Brazil" />Brazil
        </div>
        <div className="block-flags">
        <Flag className="Costa-Rica" />Costa Rica
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />22 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />07:00 GMT-5
        </Cell>
        <Cell>
           <Link route={'/betting/final/0x72A28a7AeDfB9Bc9352C46b548b580fd19B53EF7'}>
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
        <Flag className="Serbia" />Serbia
        </div>

        <div className="block-flags">
        <Flag className="Switzerland" />
        Switzerland
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />22 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x583865E2680118dC34bC0A60a4226d87Da8800EF'}>
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
        <Flag className="Serbia" />Serbia
        </div>

        <div className="block-flags">
        <Flag className="Brazil" />
        Brazil
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />27 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x12794642E572A08093C2805bC3923B0E059A585d'}>
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
        <Flag className="Switzerland" />Switzerland
        </div>

        <div className="block-flags">
        <Flag className="Costa-Rica" />
        Costa Rica
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />27 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x41a20ec4bE11339927ee7AE9d40E03cAdde5f5D6'}>
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


export default GroupE;