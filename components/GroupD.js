import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;
import {Link} from '../routes';

const GroupD = ()=>{

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
    <Cell textAlign='left'> <Flag className="Argentina" />Argentina</Cell>
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
    <Cell textAlign='left'> <Flag className="Iceland" />Iceland</Cell>
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
    <Cell textAlign='left'> <Flag className="Croatia" />Croatia</Cell>
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
    <Cell textAlign='left'> <Flag className="Nigeria" />Nigeria</Cell>
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
        <Flag className="Argentina" />Argentina
        </div>
        <div className="block-flags">
        <Flag className="Iceland" />Iceland
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />16 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />08:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x98a859dAa29e143FE441E37E35564ac783E69c84'}>
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
            <Flag className="Croatia" />Croatia
            </div>
            <div className="block-flags">                          
            <Flag className="Nigeria" />Nigeria
            </div>
            </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />16 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />14:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x146042e5B0A4A42b1F89C57B664870B673768741'}>
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
        <Flag className="Argentina" />Argentina
        <div className="divider"></div>
        </div>
        <div className="block-flags">
        <Flag className="Croatia" />Croatia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />21 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x34840ba329F1FE26d38A1E1aB55340038566e138'}>
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
        <Flag className="Nigeria" />Nigeria
        </div>

        <div className="block-flags">
        <Flag className="Iceland" />
        Iceland
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />22 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />10:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0xB7Fa244D33A2120878ECC591a7968F8811b638F0'}>
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
        <Flag className="Nigeria" />Nigeria
        </div>

        <div className="block-flags">
        <Flag className="Argentina" />
        Argentina
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />26 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x8092aE3B1F14A6bD899914057E968165f7B787f5'}>
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
        <Flag className="Iceland" />Iceland
        </div>

        <div className="block-flags">
        <Flag className="Croatia" />
        Croatia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />26 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x050f4BEA1F723c0490b42DfC9425d28ef0b8E3f4'}>
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


export default GroupD;