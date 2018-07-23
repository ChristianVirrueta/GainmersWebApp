import Layout from '../../client/layouts/layoutMain'
import Auth from '../../client/session/authSession'
import Router from 'next/router'
import Choices from '../../client/components/Choices'
import BettingSchema from '../../client/components/BettingSchema'
import BettingSummary from '../../client/components/BettingSummary'
import { Grid, Header, Flag, Icon, Container, Button } from 'semantic-ui-react'
import { getCategoriesFind } from '../../server/models/categories'
import { getBettingInfo, getSportEvent } from '../../server/models/web3'
import { createNewOrder, getOrdersFind } from '../../server/models/orders'
import { formatEtherFromWei, formatEtherToWei, getBettingFootballSchema, filterFloat, getClientDetails, getMobileOS, scrollAnimate } from '../../client/utils/Functions'
import { EVENT_NAME_GAME } from '../../client/actions/types'
import $ from 'jquery'

class BettingForm extends Auth {
    constructor(props) {
        super(props)
        this.state.category_item = []
        this.state.betting_schema = []
        this.state.betting_data = []
        this.state.orders_history = []
        this.state.dom = { loading: false, check_disabled: false }
        this.state.tabs = { active: false, key: 0 }
    }

    static async getInitialProps(props) {
        const bettInfo = await getBettingInfo(props.query.address)
        return {
            session: null,
            lang: 'en', 
            query: props.query,
            betting: bettInfo
        }
    }

    componentDidMount(){
        const current = this
        current.sessionValidate(Router, { onSession: true })
        current.fn_data_init_load(current)
        console.log(current.props.query)
        if(current.props.query.mybets){
            current.setState({ tabs: { active: true, key: 1 } })
            scrollAnimate($('#container-betting-summary'), 40)
            var URLactual = window.location.href
            var new_url = URLactual.split('?')
            window.history.pushState("", "", new_url[0])
        }
        $(document).on('click', '.unchecked-bet', function(e){
            e.preventDefault()
            current.CleanAllBet(e)
        })
        $(document).on('keyup', 'input[name="contribution_bet"]', function(e){
            var key = window.Event ? e.which : e.keyCode
            var $current_input = $(this)
            var winneroption = $current_input.parent().attr('data-winneroption')
            if(key == 13){
                var $next_input = $('.input[data-winneroption='+winneroption+']')
                if($next_input.length){
                    $next_input.find('input').focus()
                }else{
                    $('.place-bet-submit').focus()
                }
            }else{
                if(filterFloat(e, $current_input)){
                    current.OptionContribChange(e, winneroption)
                }
            }
        })
        $(document).on('click', 'button[name="place-bet-submit"]', function(e){
            e.preventDefault()

            current.setState({ dom: { loading: true, check_disabled: true } })
            $('.error-form').remove()
            $('.input').removeClass('error')

            let processing = current.ValidBetForm(e)
            if(processing.validate){
                processing = current.SubmitBetOrder(e, processing.user_id)
                processing.then(function(res){

                    if(res.validate){
                        $('#container-content-tab').append('<p class="success-form">'+res.message+'</p>')
                        current.setState({ dom: { loading: false, check_disabled: true } })
                        scrollAnimate($('.success-form'), 120)
                        setTimeout(function(){
                            var URLactual = window.location.href
                            if(URLactual.indexOf('mybets') === -1){
                                window.location.href = URLactual+'?mybets=OK'
                            }else{
                                location.reload()
                            }
                        }, 4000)
                    }else{
                        setTimeout(function(){
                            $('#container-content-tab').append('<p class="error-form">'+res.message+'</p>')
                            current.setState({ dom: { loading: false, check_disabled: false } })
                        }, 3500)
                    }
                }).catch(function(error){
                    console.log("Error place-bet-submit")
                    console.log(error)
                })
            }else{
                setTimeout(function(){
                    $('#container-content-tab').append('<p class="error-form">'+processing.message+'</p>')
                    current.setState({ dom: { loading: false, check_disabled: false } })
                }, 3500)
            }

        })
        $(document).on('click', '.accordion-section .accordion', function(e){
            if( !$(this).hasClass('active') ){
                $(this).addClass('active')
                $(this).next().toggle()
            }else{
                $(this).removeClass('active')
                $(this).next().toggle()
            }
            e.preventDefault()
        })
    }

    async fn_data_init_load(current){
        const Categories = getCategoriesFind({ parent_id: 'null' })
        Categories.then(function(res1){
            if(res1.data.length > 0){
                current.setState({ category_item: res1.data })
            }
        }).catch(function(error){
            console.log("Error fn_data_init_load")
            console.log(error)
        })
        const BettingFootballSchema = getBettingFootballSchema()
        if(BettingFootballSchema.length > 0){
            current.setState({ betting_schema: BettingFootballSchema })
            current.setState({ betting_data: BettingFootballSchema })
        }
        const orders = await getOrdersFind({ address: current.state.account, checkout_token: current.props.query.address })
        if(orders.length){
            current.setState({ orders_history: orders })
        }
    }

    handleTabSelect = (e, { activeIndex }) => this.setState({ tabs: { active: true, key: activeIndex } })

    OptionBetChange = (e, winnerOption) => {
        let betting_data = this.state.betting_data
        betting_data[winnerOption].checked = !this.state.betting_data[winnerOption].checked
        this.setState({
            betting_data: betting_data
        })
    }

    OptionContribChange = (e, winnerOption) => {
        let betting_data = this.state.betting_data
        betting_data[winnerOption].contribution = parseFloat(e.target.value)
        this.setState({
            betting_data: betting_data
        })
    }

    CleanAllBet = (e) => {
        let betting_data = this.state.betting_data
        $.each(betting_data, function(i, value){
            betting_data[i].checked = false
            betting_data[i].contribution = 0
        })
        this.setState({
            betting_data: betting_data
        })
    }

    ValidBetForm = (e) => {
        const current = this
        const session = current.sessionVerify()
        let message_return = 'Session invalid, please try to reload the page.'
        if(session){
            let errors = 0
            let lines = 0
            $.each(current.state.betting_data, function(i, value){
                if(value.checked){
                    lines++
                }
                if(value.checked && value.contribution <= 0){
                    $('.input[data-winneroption='+value.winnerOption+']').addClass('error')
                    message_return = 'Please, complete all fields.'
                    errors++
                }
            })
            if(lines === 0){
                message_return = 'Please, select at least one of the options.'
                errors++
            }
            if(errors === 0){
                return { validate: true, user_id: session }
            }
        }
        return { validate: false, message: message_return }
    }

    SubmitBetOrder = async (e, user_id) => {
        //Ethereum Process Order Pay
        const current = this
        const UserAccount = current.state.account
        let message_return = 'Your transaction could not be saved'
        let errors = 0
        let total_price = 0
        let line_items = []

        if(current.state.betting_data.length === 0 || !UserAccount){
            console.log("ERR")
            return { validate: false, message: message_return }
        }

        try{
            const SportEvent = await getSportEvent(current.props.query.address)
            let BetSummaryContrib = []
            let BetTotalContrib = 0
            $.each(current.state.betting_data, function(i, value){
                var format_ether_contrib = formatEtherToWei(value.contribution.toString(), 'ether')
                BetTotalContrib += parseFloat(format_ether_contrib)
                total_price += parseFloat(value.contribution)
                BetSummaryContrib.push(format_ether_contrib)
                if(value.checked){
                    line_items.push({
                        type: value.type,
                        player1: value.player1,
                        player2: value.player2, 
                        other: value.other, 
                        quantity: 1,
                        price: value.contribution,
                        product_id: current.props.query.address,
                        variant_id: value.winnerOption
                    })
                }
            })
            //const BetOrder = await SportEvent.methods.enterEvent(BetSummaryContrib).send({ from: UserAccount, value: BetTotalContrib })
        }catch(err){
            errors++
            message_return = err.message.split("\n")[0]
        }
        //Api Gainmers Process Order Save Paid
        if(errors === 0){
            const client_details = await getClientDetails()
            const source_name = getMobileOS()
            const checkout_details = {
                eventName: current.props.betting.eventName,
                country1: current.props.betting.country1, 
                country2: current.props.betting.country2,
                date: current.props.betting.date,
                hour: current.props.betting.hour,
                devFee: current.props.betting.devFee
            }
            const payment_details = { account_number: UserAccount, account_reference: 'Ethereum' }
            const order_data = JSON.stringify({
                email: current.state.email,
                token: localStorage.jwtToken,
                send_notification: true,
                total_price: total_price,
                currency: 'ETHEREUM',
                checkout_token: current.props.query.address,
                checkout_details: checkout_details,
                browser_ip: client_details.browser_ip,
                client_details: client_details,
                source_name: source_name,
                line_items: line_items,
                payment_details: payment_details,
                schema_origin: current.state.betting_schema,
                user_id: user_id
            })
            const order_result = await createNewOrder(order_data)
            if(order_result){
                message_return = 'Thank you\n Your transaction has been confirmed\n Wait to be redirected.'
                return { validate: true, message: message_return }
            }
        }
        return { validate: false, message: message_return }
    }

    render() {
        return (
            <Layout className="layout-betting-form" {...this.props} style={'session'} navbar={true} footer={true} session={this.state}>
                <Grid>
                    <Grid.Row>
                        <div className="titulo-02">
                            <div className="titulo-number">
                                <div className="mask-number">02</div>
                            </div>
                            <div className="titulo-content">SELECT YOUR POSSIBLE RESULT AND BET:</div>
                            <span className="subtitulo">Select one or more options from the table</span>
                        </div>
                    </Grid.Row>
                    <Grid.Row><Choices query={this.props.query} session={this.state} betting={this.props.betting}/></Grid.Row>

                    <Grid.Row className="box-room">
                        <Header as='h3' color='teal' >
                            <p className="room-name"></p>
                            <span className="name-group">{EVENT_NAME_GAME} - {this.props.betting.eventName}</span>
                            <span className="user-room"></span>
                        </Header>
                    </Grid.Row>

                    <Grid.Row columns='2' divided>
                        <Grid.Column>
                            <Container text>    
                                <div className="fecha-d">
                                    <Icon  name='calendar' />{this.props.betting.date}
                                    <Icon style={{padding: '0 10px'}}name='clock' />{this.props.betting.hour}
                                </div>
                                <div className="titulo-pais" >
                                    <div style={{display:'inline-block', verticalAlign:'middle'}}>
                                        <Flag className={this.props.betting.country1}  />{this.props.betting.country1}
                                        <span style={{display:'block', fontSize:'16px'}}>(Left side)</span> 
                                    </div>
                                    <div style={{display:'inline-block', verticalAlign:'top', margin:'0 20px'}}>
                                        <span>   VS</span>
                                    </div>
                                    <div style={{display:'inline-block', verticalAlign:'middle'}}>
                                    <Flag style={{padding: '10px'}} className={this.props.betting.country2} />{this.props.betting.country2}
                                        <span style={{display:'block', fontSize:'16px'}}>(Right side)</span>
                                    </div>
                                    <br/>
                                </div>
                            </Container>
                        </Grid.Column >
                        <Grid.Column >
                            <Container>
                                <div className="mieter">
                                    <span className="text-eter">Accumulated<br/> total of betting (ETH):</span>
                                    <span className="valor-eter"><span className="mskh">{formatEtherFromWei(this.props.betting.balance, 'ether')}</span></span>
                                </div>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns='2' divided>
                        <Grid.Column >
                            <BettingSchema columns='3' betting={this.props.betting} session={this.state} current={this}/>
                        </Grid.Column>
                        <Grid.Column className="box-padding">
                            <BettingSummary betting={this.props.betting} session={this.state} current={this}/>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Layout>
        );
    }
}
export default BettingForm;