import { Dimmer, Loader, Tab } from 'semantic-ui-react'
import ContentTabBetCart from './ContentTabBetCart'
import ContentTabBetHist from './ContentTabBetHist'

export function renderStages(props){
    if(props.betting.eventName){
        const betting_data = props.session.betting_data
        const orders_history = props.session.orders_history
        //TABS
        const GroupContentTabs = [
            {
                menuItem: 'Bet',
                render: () => <Tab.Pane ><ContentTabBetCart menu_key={0} menu_render={null} betting={props.betting} betting_data={betting_data} current={props.current}/></Tab.Pane>
            },
            {
                menuItem: 'My Bets',
                render: () => <Tab.Pane ><ContentTabBetHist menu_key={1} menu_render={null} betting={props.betting} orders_history={orders_history} current={props.current}/></Tab.Pane>
            }
        ]
        if(GroupContentTabs.length > 0){
            return (
                <div id="container-betting-summary" className="group-betting-summary">
                    <Dimmer active={props.session.dom.loading} >
                        <Loader indeterminate>Metamask is procesing the transaction</Loader>
                    </Dimmer>
                    <Tab activeIndex={props.session.tabs.key} onTabChange={props.current.handleTabSelect} menu={{ inverted: true, compact:true }} panes={ GroupContentTabs } />
                </div>
            )
        }
    }
    
    return (
        <div id="container-betting-summary" className="group-betting-summary"></div>
    )
}

export default (props)=> {
    return (
        renderStages(props)
    );
}