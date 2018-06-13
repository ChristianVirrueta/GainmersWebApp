import React from 'react';
import {Container}  from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';


export default (props)=> {

    
    return (

        <Container>
            <Head>
                <link rel="stylesheet" 
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <link rel="stylesheet" 
                href="http://dapp.gainmers.io/assets/style/styles-betting.css"></link>
            </Head>
             
            <Header/>
                {props.children}
           <Footer/>
        </Container>
       


    );

};