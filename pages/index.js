import React,{Component} from 'react';
import Layout from '../components/layout1';
import NetValidation from '../components/netValidation';
import {Segment} from 'semantic-ui-react';



class MainIndex extends Component{
    render() {
        return(
        <Layout>
            <Segment>
                <NetValidation/>
            </Segment>
                
        </Layout>
        );
    }       
}
export default MainIndex;