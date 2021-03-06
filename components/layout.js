import React from 'react';
import {Container}  from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Styles from '../static/css/styles-betting.css'

export default (props)=> {

    
    return (

        <Container>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
                <title>DApp Gainmers</title>
                <link rel="stylesheet" 
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <style dangerouslySetInnerHTML={{__html: Styles}}/>
            </Head>
             
            <Header/>
                {props.children}
           <Footer/>
        </Container>
       


    );

};