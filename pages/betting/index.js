import Layout from '../../client/layouts/layoutMain'
import Router from 'next/router'
import Auth from '../../client/session/authSession'
import $ from 'jquery'

//import React, {Component} from 'react';
import {Grid,Image} from 'semantic-ui-react';
//import {Link} from '../../routes'
//import Layout from '../../components/layout';
import Choices from '../../components/choices';

class Betting extends Auth {

    componentDidMount(){
        this.sessionValidate(Router, { onSession: true })
    }

    render() {
        const {Row,Column} = Grid;

        return (
            <Layout {...this.props} style={'session'} navbar={true} footer={true} session={this.state}>
                <Grid container stackable verticalAlign='middle' textAlign='center'>
                    <div>
                        <div className="titulo-01">
                            <div className="titulo-number">
                                <div className="mask-number">01</div>
                            </div>
                            <div className="titulo-content">Live  the  World  Cup  Russia   2018:</div>
                        </div>
                    </div>
                    <Row><Image src='../../static/images/banner-rusia.jpg' size='large'/></Row>
                    <div style={{width: '560px !important'}} >
                        <Row className="ancho-fijo"><Choices/></Row>
                    </div>
                </Grid>
                <style>{`
                    .ancho-fijo {
                        width: 550px !important;
                        margin-top:20px !important;
                    }
                `}</style>
            </Layout>
        );
    }
}
export default Betting;