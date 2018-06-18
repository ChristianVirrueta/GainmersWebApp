import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;
import {Link} from '../routes';

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
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell style={{background : '#18191a'}} >3</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Australia" />Australia</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>1 </Cell>
    <Cell>1</Cell>
    <Cell>2</Cell>
    <Cell>-1</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Peru" />Peru</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>0 </Cell>
    <Cell>1</Cell>
    <Cell>-1</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>
    </Row>

        <Row>
    <Cell textAlign='left'> <Flag className="Denmark" />Denmark</Cell>
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
        <Flag className="France" />France
        </div>
        <div className="block-flags">
        <Flag className="Australia" />Australia
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
            <Flag className="Peru" />Peru
            </div>
            <div className="block-flags">                          
            <Flag className="Denmark" />Denmark
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
        <Flag className="Denmark" />Denmark
        </div>
        <div className="block-flags">
        <Flag className="Australia" />Australia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />21 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />07:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0xABE14F453992aa8dbFfb026806C078aA4b209A5a'}>
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
        <Flag className="France" />France
        </div>

        <div className="block-flags">
        <Flag className="Peru" />
        Peru
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />21 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />10:00 GMT-5
        </Cell>
        <Cell>
           <Link route={'/betting/final/0x5703B6b1B4CF40D9e888AD1F1596C0d62106bd36'}>
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
        <Flag className="Australia" />Australia
        </div>

        <div className="block-flags">
        <Flag className="Peru" />
        Peru
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />26 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x71a8D7F35914cdE7010a092f8665903c149e2d2F'}>
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
        <Flag className="Denmark" />Denmark
        </div>

        <div className="block-flags">
        <Flag className="France" />
        France
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />26 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0xfEbD7c70534A71B0A8845AB9c63613644293296F'}>
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


export default GroupC;