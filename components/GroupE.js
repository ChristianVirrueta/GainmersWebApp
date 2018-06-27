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
    <HeaderCell className="points">Points</HeaderCell>


    </Row>
</Header>
<Body>
<Row >
    <Cell textAlign='left'> <Flag className="Brazil" />Brazil</Cell>
    <Cell>3</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>5</Cell>
    <Cell>1</Cell>
    <Cell>4</Cell>
    <Cell className="points" style={{background : '#18191a'}} >7</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Switzerland" />Switzerland</Cell>
    <Cell>3</Cell>
    <Cell>1</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell>5</Cell>
    <Cell>4</Cell>
    <Cell>1</Cell>
    <Cell className="points" style={{background : '#18191a'}}>5</Cell>

    </Row>
       <Row>
    <Cell textAlign='left'> <Flag className="Serbia" />Serbia</Cell>
    <Cell>3</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>2</Cell>
    <Cell>2</Cell>
    <Cell>4</Cell>
    <Cell>-2</Cell>
    <Cell className="points" style={{background : '#18191a'}}>3</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Costa-Rica" />Costa Rica</Cell>
    <Cell>3</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>2</Cell>
    <Cell>2</Cell>
    <Cell>5</Cell>
    <Cell>-3</Cell>
    <Cell className="points" style={{background : '#18191a'}}>1</Cell>
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
              
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>2-0</span>
        </Cell>
        <Cell>
           
            
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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>1-2</span>
        </Cell>
        <Cell>
           
            
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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>0-2</span>
        </Cell>
        <Cell>
            
            
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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>2-2</span>
        </Cell>
        <Cell>
           
            
        </Cell>
    </Row>
    
</Body>

</Table>
</div>
       
);

}


export default GroupE;