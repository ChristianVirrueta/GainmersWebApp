import React, {Component} from 'react';
import {Button,Table,Flag, Icon} from 'semantic-ui-react';
const { Header, Row, HeaderCell, Body, Cell } = Table;
import {Link} from '../routes';

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
    <HeaderCell className="points" >Points</HeaderCell>


    </Row>
</Header>
<Body>
<Row >
    <Cell textAlign='left'> <Flag className="Portugal" />Portugal</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>4</Cell>
    <Cell>3</Cell>
    <Cell>1</Cell>
    <Cell className="points" style={{background : '#18191a'}} >4</Cell>

    </Row>

    <Row>
    <Cell textAlign='left'> <Flag className="Spain" />Spain</Cell>
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
    <Cell textAlign='left'> <Flag className="Morocco" />Morocco</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell>0</Cell>
    <Cell>2</Cell>
    <Cell>0</Cell>
    <Cell>2</Cell>
    <Cell>-2</Cell>
    <Cell className="points" style={{background : '#18191a'}}>0</Cell>
    </Row>

        <Row>
    <Cell textAlign='left'> <Flag className="Iran" />Iran</Cell>
    <Cell>2</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>1</Cell>
    <Cell>0</Cell>
    <Cell className="points" style={{background : '#18191a'}}>3</Cell>

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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>0-1</span>
        </Cell>
        <Cell>
            
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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>3-3</span>
        </Cell>
        <Cell>
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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>1-0</span>
        </Cell>
        <Cell>
           
            
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
            <Icon style={{padding: '0 10px'}}name='clock' />Full-Time <span style={{padding:'0 5px'}}>0-1</span>
        </Cell>
        <Cell>
          
            
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
            <Link route={'/betting/final/0x7854d78b585041cfa6Ae792741938B93Cb7be247'}>
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
            <Link route={'/betting/final/0xa3B5a394Dd1b47F4f4C76AeE66F6039be0Ad4599'}>
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


export default GroupB;