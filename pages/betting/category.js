import Layout from '../../client/layouts/layoutMain'
import Router from 'next/router'
import Auth from '../../client/session/authSession'
import $ from 'jquery'
import { Grid, Image } from 'semantic-ui-react';
import Choices from '../../client/components/Choices';
import Matches from '../../client/components/Matches';

class Betting extends Auth {

    componentDidMount(){
        this.sessionValidate(Router, { onSession: true })
    }

    render() {
        return (
            <Layout {...this.props} style={'session'} navbar={true} footer={true} session={this.state}>
                <Grid container stackable verticalAlign='middle' >
                    <Grid.Row centered ><Choices query={this.props.query} session={this.state}/></Grid.Row>
                    <Grid.Row centered ><Matches query={this.props.query} session={this.state}/></Grid.Row>
                </Grid>
            </Layout>
        );
    }
}
export default Betting;