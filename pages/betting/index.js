import Layout from '../../client/layouts/layoutMain'
import Router from 'next/router'
import Auth from '../../client/session/authSession'
import $ from 'jquery'
import { Grid, Image } from 'semantic-ui-react'
import Choices from '../../client/components/Choices'
import { getCategoriesFind } from '../../server/models/categories'

class Betting extends Auth {
    constructor(props) {
        super(props)
        this.state.category_item = []
    }
    
    componentWillMount(){
        //code move to component did mount
    }

    componentDidMount(){
        const current = this
        current.sessionValidate(Router, { onSession: true })

        const Categories = getCategoriesFind({ parent_id: 'null' })
        Categories.then(function(res){
            if(res.data.length > 0){
                current.setState({ category_item: res.data })
            }
        }).catch(function(error){
            console.log("Error: getCategoriesFind()")
            console.log(error)
        })
    }

    render() {
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
                    <Grid.Row><Image src='../../static/images/banner-rusia.jpg' size='large'/></Grid.Row>
                    <div style={{width: '560px !important'}} >
                        <Grid.Row className="ancho-fijo"><Choices query={this.props.query} session={this.state}/></Grid.Row>
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