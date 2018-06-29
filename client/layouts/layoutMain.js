import {Segment,Container} from 'semantic-ui-react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Styles from '../../static/css/styles.css'
import StylesBetting from '../../static/css/styles-betting.css'

export function LayoutParts(part, props){
    if(part === 'navbar' && props.navbar === true){
        return(
            <Navbar session={props.session} style={props.style}/>
        )
    }
    if(part === 'footer' && props.footer === true){
        return(
            <Footer session={props.session} style={props.style}/>
        )
    }
}

export default (props)=> {
    return (
        <Segment>
            <Container>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
                    <link rel="icon" type="image/png" href="../../static/images/favicon.png" />
                    <title>DApp Gainmers</title>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                    <style dangerouslySetInnerHTML={{__html: (props.style==='session'?StylesBetting:Styles)}}/>
                </Head>
                { LayoutParts('navbar', props) }

                { props.children }

                { LayoutParts('footer', props) }
            </Container>
        </Segment>
    );
};