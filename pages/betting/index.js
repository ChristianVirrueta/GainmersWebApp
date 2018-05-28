import React, {Component} from 'react';
import {Grid,Image} from 'semantic-ui-react';
import {Link} from '../../routes'
import Layout from '../../components/layout';
import Choices from '../../components/choices';



class Betting extends Component {
    
       
render() {
    const {Row,Column} = Grid;

   return (
    <Layout>
        <Grid container stackable verticalAlign='middle' textAlign='center'>
        

        <Row  >
            <h2>01 LIVE THE WORLD CUP RUSSIA 2018:</h2>
             </Row>            
        <Row >
            <Image src='https://farm1.staticflickr.com/974/41451717544_0bca810ab0_m.jpg' size='large'/>
        </Row>
        <Row>
            <Choices/>
        </Row>
    

   </Grid>

  </Layout> 
  ); 

}

}

export default Betting;