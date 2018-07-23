import { Segment } from 'semantic-ui-react'
import { format_money, format_datetime } from '../utils/Functions'
import $ from 'jquery'

export function defineBettingBoxType(value, betting){
    if(value.type === 'other' ){
        let marker_show = ''
        let marker_class = ''
        if(value.player1){
            marker_class = 'summary-other-player1'
            marker_show = value.player1.replace('[player1]', betting.country1)
        }else if(value.player2){
            marker_class = 'summary-other-player2'
            marker_show = value.player2.replace('[player2]', betting.country2)
        }else if(value.other){
            marker_class = 'summary-other'
            marker_show = value.other
        }
        return (
            <div className="column column-score">
                <span className={marker_class+" bet-info info-numbers"}>
                    <span>{marker_show}</span>
                </span>
            </div>
        )
    }
    return (
        <div className="column column-score">
            <span className="bet-info info-numbers">
                <span className="bet-info-left">{value.player1}</span>
                <span className="script">-</span>
                <span className="bet-info-right">{value.player2}</span>
            </span>
        </div>
    )
}

export function renderContentTab(props){
    //CONTENT TABS
    if(props.orders_history.length > 0){
        let OrdersHistory = []
        $.each(props.orders_history, function(i, value){
            if(OrdersHistory.length === 0){
                OrdersHistory.push({
                    id: value.id,
                    checkout_details: $.parseJSON(value.checkout_details),
                    created_at: value.created_at,
                    financial_status: value.financial_status,
                    name: value.name, 
                    order_number: value.order_number,
                    line_items: $.parseJSON(value.line_items),
                    total_price: value.total_price,
                })
            }else{
                var history_lines = OrdersHistory[0].line_items
                var current_lines = $.parseJSON(value.line_items)
                $.each(current_lines, function(k, current_line){
                    var line_process = false
                    $.each(history_lines, function(l, history_line){
                        if(history_line.variant_id === current_line.variant_id){
                            line_process = true
                            var price_new = parseFloat(history_line.price)+parseFloat(current_line.price)
                            OrdersHistory[0].line_items[l].price = price_new
                        }
                    })
                    if(!line_process){
                        OrdersHistory[0].line_items.push(current_line)
                    }
                })
                var history_total = OrdersHistory[0].total_price
                var current_total = value.total_price
                var total_new = parseFloat(history_total) + parseFloat(current_total)
                OrdersHistory[0].total_price = total_new
            }
        })
        OrdersHistory[0].line_items.sort(function (a, b) {
            if (a.variant_id > b.variant_id) { return 1 }
            if (a.variant_id < b.variant_id) { return -1 }
            return 0 // a must be equal to b
        })

        return (
            <div id="container-content-history" className="content-tabs accordion-section summary-my-bet">
                <Segment>
                    {OrdersHistory.map((order, j) =>
                        <div className="accordion-line" data-id={order.id} key={j}>
                            <button className="accordion">{order.checkout_details.country1} vs {order.checkout_details.country2}</button>
                            <div className="panel">
                                <div className="bet-lines-container">
                                    {order.line_items.map((line_item, k) =>
                                        <div className="bet-line" data-reference={order.order_number+''+line_item.variant_id} key={k}>

                                            {defineBettingBoxType(line_item, order.checkout_details)}

                                            <div className="column column-retorn text-right">
                                                {/*<span className="retorn-details"><span className="retorn-left">Return:</span><span className="retorn-right return-ammout">1.85</span></span>*/}
                                                <label className="label-retorn-line text-left">{format_money(line_item.price, 4, '')}</label>
                                            </div>
                                            <div className="clear"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="bet-summary-container mybets-summary">
                                    <div className="total-bet">
                                        <div className="columns column-6 text-left">Total bet: </div>
                                        <div className="columns column-6 text-right">{format_money(order.total_price)}</div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="buy-date"><label>Buy {format_datetime(order.created_at, 'd/m/Y H:m 12M')}</label></div>
                                </div>
                            </div>
                        </div>
                    )}
                </Segment>
            </div>
        )
    }
    return (
        <div id="container-content-history" className="content-tabs accordion-section summary-my-bet"></div>
    )
}

export default (props)=> {
    return (
        renderContentTab(props)
    );
}