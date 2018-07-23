import { Table, Flag, Icon, Button } from 'semantic-ui-react'
import { handelize, format_date, format_hour, routing_bet } from '../utils/Functions'
import $ from 'jquery'
import { Link } from '../../server/routes'

export function renderMatches(props){
    if(props.session.group_matches.length){
        //CONTENT MATCHES
        const { Row, Body, Cell } = Table
        let item_matches = props.session.group_matches

        if(props.session.tabs.active){
            item_matches = []
            const category_id = props.session.tabs.category_items[props.session.tabs.key]
            $.each(props.session.group_matches, function(i, value){
                if(value.ct_id == category_id){
                    item_matches.push(value)
                }
            })
        }

        return(
            <div id="container-group-matches" className="group-matches group-container-page">
                {props.session.tabs.active ? <h3 className="titulo-match">Group Matches</h3> : ''}
                <Table color={'black'} textAlign='center' inverted>
                    <Body>
                        {item_matches.map((match, i) =>
                            <Row key={i}>
                                <Cell textAlign='center'>
                                    <div className="block-flags"><Flag className={handelize(match.c1_code+'-'+match.c1_name)} />{match.c1_short}</div>
                                    <div className="block-flags"><Flag className={handelize(match.c2_code+'-'+match.c2_name)} />{match.c2_short}</div>
                                </Cell>
                                <Cell className="txt">
                                    {match.gm_status==='PLAY_OUT'?'':<Icon name='calendar'/>} {match.gm_status==='PLAY_OUT'?'':format_date(match.gm_current, 'd sm Y')}
                                    <Icon name='clock' /> {match.gm_status==='PLAY_OUT'?'Full-Time':''} <span className={match.gm_status==='PLAY_OUT'?'span-playout':''}>{match.gm_status==='PLAY_OUT'? (match.gm_marker_1+'-'+match.gm_marker_2) : format_hour(match.gm_current, 'H:m GMT-5') }</span>
                                </Cell>
                                <Cell>
                                    {match.gm_status==='PLAY_OUT'? '' : <Link route={routing_bet(match.gm_current, match.gm_address)}><a><Button primary className="pool">Pool</Button></a></Link> }
                                </Cell>
                            </Row>
                        )}
                    </Body>
                </Table>
            </div>
        )
    }
    
    return (
        <div id="container-group-matches" className="group-matches group-container-page"></div>
    )
}

export default (props)=> {
    return (
        renderMatches(props)
    );
}