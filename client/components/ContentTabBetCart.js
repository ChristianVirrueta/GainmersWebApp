import { List, Segment, Button, Header, Input } from 'semantic-ui-react'
import { format_money } from '../utils/Functions'

export function format_total_bet(betting_data){
    let total_bet = 0
    if(betting_data.length > 0){
        betting_data.map((val, i) =>
            total_bet += parseFloat(val.contribution)
        )
    }
    return format_money(total_bet)
}

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
            <Header as='h3' className='custom-content-line miHeight'>
                <span className={marker_class}><span>{marker_show}</span></span>
            </Header>
        )
    }
    return (
        <Header as='h3' className='custom-content-line'>
            <span className='item-bet item-bet-left'>{value.player1}</span>-<span className='item-bet item-bet-right'>{value.player2}</span>
        </Header>
    )
}

export function renderItemBet(value, props){
    return (
        <div>
            <List.Content floated='right'>
                <Input className="miInput" placeholder='Value in Ether' name='contribution_bet' data-winneroption={value.winnerOption} disabled={props.current.state.dom.check_disabled}/>
                <Button className="miButton" icon='close'/>
            </List.Content>
            <List.Content >
                {defineBettingBoxType(value, props.betting)}
            </List.Content>
        </div>
    )
}

export function renderContentTab(props){
    //CONTENT TABS
    const betting_data = props.betting_data
    return (
        <div id="container-content-tab" className={"content-tabs"}>
            <List divided relaxed className="bet-lines-container__after-click">
                {betting_data.map((value, i) =>
                    <List.Item key={i} className={value.checked ? 'listitem-border' : ''}>
                        {value.checked ? renderItemBet(value, props) : null }
                    </List.Item>
                )}
            </List>
            <Segment>
                <Header block color= 'teal' as='h5' style={{fontSize:  '1.3em',fontWeight: 'normal',marginTop: '1.5em',}}>
                    <span className="total">Total bet:</span>
                    <span className="total-eter total-bet-end"> {format_total_bet(props.betting_data)}</span>
                    <br/>
                    <Button className="place-bet" primary size='large' name='place-bet-submit'>Place bet!</Button>
                </Header>
                <br/>
                <p style={{textAlign:'right'}}>*Service Fee: {props.betting.devFee}%</p>
            </Segment>
        </div>
    )
}

export default (props)=> {
    return (
        renderContentTab(props)
    );
}