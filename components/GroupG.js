import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;
import {Link} from '../routes';

const GroupG = ()=>{

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
    <Cell textAlign='left'> <Flag className="Belgium" />Belgium</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>3</Cell>
    <Cell>0</Cell>
    <Cell>3</Cell>
    <Cell style={{background : '#18191a'}} >3</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Panama" />Panama</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>3</Cell>
    <Cell>-3</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Tunisia" />Tunisia</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>2</Cell>
    <Cell>-1</Cell>
    <Cell style={{background : '#18191a'}}>0</Cell>
    </Row>

        <Row>
    <Cell textAlign='left'> <Flag className="England" />England</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>0 </Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
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
        <Flag className="Belgium" />Belgium
        </div>
        <div className="block-flags">
        <Flag className="Panama" />Panama
        </div>
        </Cell>
        <Cell className="txt">       
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>3-0</span>
        </Cell>
        <Cell>
            
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
            <Flag className="Tunisia" />Tunisia
            </div>
            <div className="block-flags">                          
            <Flag className="England" />England
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
        <Flag className="Belgium" />Belgium
        </div>
        <div className="block-flags">
        <Flag className="Tunisia" />Tunisia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />23 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />07:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x8baFed95669Ae8F19e11B0dFd57e9Da15BbbbbE5'}>
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
        <Flag className="England" />England
        </div>

        <div className="block-flags">
        <Flag className="Panama" />
        Panama
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />24 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />07:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0xE4C320b912558e7ab48059d3C6b81998109081B1'}>
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
        <Flag className="Panama" />Panama
        </div>

        <div className="block-flags">
        <Flag className="Tunisia" />
        Tunisia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />28 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0xCf96886b15174A99F9b800c6F0a2D28A99fd0cA8'}>
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
        <Flag className="England" />England
        </div>

        <div className="block-flags">
        <Flag className="Belgium" />
        Belgium
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />28 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />13:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x28B3B32676856ea857c4E53C8ad61c1fFC17BE72'}>
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


export default GroupG;