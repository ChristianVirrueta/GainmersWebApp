import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;
import {Link} from '../routes';

const GroupH = ()=>{

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
    <Cell textAlign='left'> <Flag className="Japan" />Japan</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>4</Cell>
    <Cell>3</Cell>
    <Cell>1</Cell>
    <Cell className="points" style={{background : '#18191a'}}>4</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Senegal" />Senegal</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>4</Cell>
    <Cell>3</Cell>
    <Cell>1</Cell>
    <Cell className="points" style={{background : '#18191a'}}>4</Cell>

    </Row>
       <Row>
    <Cell textAlign='left'> <Flag className="Colombia" />Colombia</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>4</Cell>
    <Cell>2</Cell>
    <Cell>2</Cell>
    <Cell className="points" style={{background : '#18191a'}}>3</Cell>
    </Row>
<Row >
    <Cell textAlign='left'> <Flag className="Poland" />Poland</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>5</Cell>
    <Cell>-4</Cell>
    <Cell className="points" style={{background : '#18191a'}} >0</Cell>

    </Row>

    

 

    
</Body>

</Table>

<h3 className="titulo-match">Group Matches</h3>

<Table  color={'black'}  textAlign='center' inverted  >

<Body>
    <Row>
        <Cell textAlign='center'>
        <div className="block-flags">
        <Flag className="Colombia" />Colombia
        </div>
        <div className="block-flags">
        <Flag className="Japan" />Japan
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
            <Flag className="Poland" />Poland
            </div>
            <div className="block-flags">                          
            <Flag className="Senegal" />Senegal
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
        <Flag className="Japan" />Japan
        </div>
        <div className="block-flags">
        <Flag className="Senegal" />Senegal
        </div>
        </Cell>
        <Cell className="txt">  
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>2-2</span>
        </Cell>
        <Cell>
            
            
        </Cell>
    </Row>
    <Row>
        <Cell textAlign='center'> 
        <div className="block-flags">
        <Flag className="Poland" />Poland
        </div>

        <div className="block-flags">
        <Flag className="Colombia" />
        Colombia
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
        <Flag className="Japan" />Japan
        </div>

        <div className="block-flags">
        <Flag className="Poland" />
        Poland
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />28 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x9e0b56B359D76ed56CC6CDEd265Ed0ED7b87Dd41'}>
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
        <Flag className="Senegal" />Senegal
        </div>

        <div className="block-flags">
        <Flag className="Colombia" />
        Colombia
        </div>
        </Cell>
        <Cell className="txt">
            <Icon  name='calendar' />28 Jun 2018         
            <Icon style={{padding: '0 10px'}}name='clock' />09:00 GMT-5
        </Cell>
        <Cell>
            <Link route={'/betting/final/0x60835406617E776DD55946345119A1062C4e4c0E'}>
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


export default GroupH;