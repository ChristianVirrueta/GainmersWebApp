import Layout from '../client/layouts/layoutMain'
import Auth from '../client/session/authSession'
import Router from 'next/router'
import { List, Segment, Container, Button } from 'semantic-ui-react'
import { getOrdersFind } from '../server/models/orders'
import { diff_minutes } from '../client/utils/Functions'
import { Link } from '../server/routes'
import $ from 'jquery'

class MyBets extends Auth {
    constructor(props) {
        super(props)
        this.state.orders_history = []
    }

    componentDidMount(){
        const current = this
        current.sessionValidate(Router, { onSession: true })
        current.fn_data_init_load(current)
    }

    async fn_data_init_load(current){
        const orders = await getOrdersFind({ address: current.state.account })
        if(orders.length){
            let orders_summary = []
            let orders_history = []
            $.each(orders, function(i, value){
                if(orders_summary.indexOf(value.checkout_token) === -1){
                    orders_summary.push(value.checkout_token)
                    orders_history.push({
                        id: value.id,
                        checkout_token: value.checkout_token,
                        checkout_details: $.parseJSON(value.checkout_details),
                        created_at: value.created_at,
                        financial_status: value.financial_status,
                        name: value.name, 
                        order_number: value.order_number,
                        total_price: value.total_price,
                    })
                }
            })
            current.setState({ orders_history: orders_history })
        }
    }

    renderTimeOrderAgo(created_at){
        let created_at_ = new Date(created_at)
        let current_at_ = new Date()
        let diference = diff_minutes(current_at_, created_at_)
        let timeOrderAgo = ''
        if(diference < 60){
            timeOrderAgo = 'Updated '+diference+' mins ago'
        }else if(diference >= 60 && diference < 1440){
            timeOrderAgo = 'Updated '+parseInt(diference/60)+' hours ago'
        }else if(diference >= 1440 && diference < 10080){
            timeOrderAgo = 'Updated '+parseInt(diference/(60*24))+' days ago'
        }else if(diference >= 10080 && diference < 40320){
            timeOrderAgo = 'Updated '+parseInt(diference/(60*24*7))+' weeks ago'
        }else if(diference >= 40320 && diference < 483840){
            timeOrderAgo = 'Updated '+parseInt(diference/(60*24*7*4))+' months ago'
        }else if(diference >= 483840){
            timeOrderAgo = 'Updated '+parseInt(diference/(60*24*7*4*12))+' years ago'
        }

        return (
            <span>{timeOrderAgo}</span>
        )
    }
      
    render(){
        if(this.state.orders_history.length > 0){
            const OrdersHistory = this.state.orders_history
            return(
                <Layout className="layout-betting-form" {...this.props} style={'session'} navbar={true} footer={true} session={this.state}>
                    <div>
                        <Segment compact style={{ margin: 'auto' }} >
                            <Container text >
                                <List  divided relaxed>
                                    {OrdersHistory.map((order, j) =>
                                        <List.Item key={j}>
                                            <List.Content>
                                                <Link route={`/betting/final/`+order.checkout_token+`?mybets=OK`}>
                                                    <a>
                                                        <Button floated='right'primary  style={{ marginBottom: 10 }}>
                                                            See More
                                                        </Button>
                                                    </a>
                                                </Link>
                                                <List.Header as='a'>{order.checkout_details.country1} vs {order.checkout_details.country2}</List.Header>
                                                <List.Description as='a'>{this.renderTimeOrderAgo(order.created_at)}</List.Description>
                                            </List.Content>
                                        </List.Item>
                                    )}
                                </List>
                            </Container>
                        </Segment>
                    </div>
                </Layout>
            )
        }
        return(
            <Layout className="layout-betting-form" {...this.props} style={'session'} navbar={true} footer={true} session={this.state}>
                <Segment></Segment>
            </Layout>
        )
    }
}

export default MyBets;