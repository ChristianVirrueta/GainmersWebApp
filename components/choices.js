import React, {Component} from 'react';
import {Button,Table,Flag, Grid,Tab} from 'semantic-ui-react';
import {Link} from '../routes'


const { Column, Row } = Grid;

class Choices extends Component {
    
       
render() {

   return (

       <div>
            <Link route={`/betting/group-stage`}>
            <a>
            <Button primary style={{ marginBottom: 10 }} className="group-stage">
                Group Stage
            </Button>
            </a>
            </Link>            
            <Link route={`/betting/octaves`}>
            <a>
            <Button primary  style={{ marginBottom: 10 }} className="octaves">
                Octaves
            </Button>
            </a>
            </Link>
            <Link route={`/betting/quarter-finals`}>
            <a>
            <Button primary  style={{ marginBottom: 10 }} className="quarter">
                Quarter Finals
            </Button>
            </a>
            </Link>
            <Link route={`/betting/semifinals`}>
            <a>
            <Button primary  style={{ marginBottom: 10 }} className="semi">
                Semi Finals
            </Button>
            </a>
            </Link>
            <Link route={`/betting/3-4-position`}>
            <a>
            <Button primary  style={{ marginBottom: 10 }} className="places">
                3° and 4° places
            </Button>
            </a>
            </Link>
            <Link route={`/betting/final`}>
            <a>
            <Button primary  style={{ marginBottom: 10 }} className="grandfinal">
                Grand Finals
            </Button>
            </a>
            </Link>
    </div>
  ); 

}

}

export default Choices;