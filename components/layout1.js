import React from 'react';
import {Container,Segmen,Menu}  from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header1';
import Footer from './footer';
import Styles from '../static/css/styles.css'

export default (props)=> {
    return (
        
            <Container textAlign='center'>
       
            <Head>
            <title>DApp Gainmers</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" className="next-head" />
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