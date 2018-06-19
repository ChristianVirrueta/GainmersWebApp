import React from 'react';
import {Container,Segmen,Menu}  from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header1';
import Footer from './footer'; 

export default (props)=> {
    return (
        
            <Container textAlign='center'>
       
            <Head>
            <title>DApp Gainmers</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" className="next-head" />
                <link rel="stylesheet" 
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <link rel="stylesheet" 
                href="http://dapp.gainmers.io/assets/style/styles.css"></link>
            </Head>

            <Header/>
                {props.children}


           <Footer/>
  
       </Container>


    );

};