import React,{Component} from 'react';
import Layout from '../components/layout';
import {List,Button,Segment,Container} from 'semantic-ui-react';
import {Link} from '../routes'

class MyBets extends Component {

    render(){
        return(
            <Layout>
                <Segment compact style={{ margin: 'auto' }} >
                <Container text >
                <List  divided relaxed>
                   <List.Item>
                        <List.Content>
                            <Link route={`/betting/betting-form`}>
                                <a>
                                <Button floated='right'primary  style={{ marginBottom: 10 }}>
                                    See More
                                </Button>
                                </a>
                            </Link>
                            <List.Header as='a'>Room n°16 Peru vs France</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item> 
                    <List.Item>
                        <List.Content>
                            <Link route={`/betting/betting-form`}>
                                <a>
                                <Button floated='right'primary  style={{ marginBottom: 10 }}>
                                    See More
                                </Button>
                                </a>
                            </Link>
                            <List.Header as='a'>Room n°16 Peru vs France</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <Link route={`/betting/betting-form`}>
                                <a>
                                <Button floated='right'primary  style={{ marginBottom: 10 }}>
                                    See More
                                </Button>
                                </a>
                            </Link>
                            <List.Header as='a'>Room n°16 Peru vs France</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item>                    
                </List>
                </Container>
                </Segment>           
            </Layout>
        );
    }
}

export default MyBets;