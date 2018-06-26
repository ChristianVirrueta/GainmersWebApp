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
    <HeaderCell className="points">Points</HeaderCell>


    </Row>
</Header>
<Body>
<Row>
    <Cell textAlign='left'> <Flag className="Croatia" />Croatia</Cell>
    <Cell>3</Cell>
    <Cell>3</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>7</Cell>
    <Cell>1</Cell>
    <Cell>6</Cell>
    <Cell className="points" style={{background : '#18191a'}}>9</Cell>
    </Row>

    <Row >
    <Cell textAlign='left'> <Flag className="Argentina" />Argentina</Cell>
    <Cell>3</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>3</Cell>
    <Cell>5</Cell>
    <Cell>-2</Cell>
    <Cell className="points" style={{background : '#18191a'}} >4</Cell>

    </Row>

        <Row>
    <Cell textAlign='left'> <Flag className="Nigeria" />Nigeria</Cell>
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
    <Cell textAlign='left'> <Flag className="Iceland" />Iceland</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>3</Cell>
    <Cell>-2</Cell>
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
        <Flag className="Argentina" />Argentina
        </div>
        <div className="block-flags">
        <Flag className="Iceland" />Iceland
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
            <Flag className="Croatia" />Croatia
            </div>
            <div className="block-flags">                          
            <Flag className="Nigeria" />Nigeria
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
        <Flag className="Argentina" />Argentina
        </div>
        <div className="block-flags">
        <Flag className="Croatia" />Croatia
        </div>
        </Cell>
        <Cell className="txt">
                   
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>0-3</span>
        </Cell>
        <Cell>
            
            
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
                    
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>2-0</span>
        </Cell>
        <Cell>
    
            
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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>1-2</span>
        </Cell>
        <Cell>
            
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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>1-2</span>
        </Cell>
        <Cell>
            
            
        </Cell>
    </Row>
    
</Body>

</Table>
</div>
       
);

}


export default GroupD;