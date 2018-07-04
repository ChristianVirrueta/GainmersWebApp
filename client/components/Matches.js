import { Table, Flag, Icon } from 'semantic-ui-react'
import { handelize } from '../utils/Functions'
import $ from 'jquery'

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
            <div id="container-group-matches" className="group-matches">
                <h3 className="titulo-match">Group Matches</h3>
                <Table color={'black'} textAlign='center' inverted>
                    <Body>
                        {item_matches.map((match, i) =>
                            <Row key={i}>
                                <Cell textAlign='center'>
                                    <div className="block-flags"><Flag className={handelize(match.c1_code+'-'+match.c1_name)} />{match.c1_short}</div>
                                    <div className="block-flags"><Flag className={handelize(match.c2_code+'-'+match.c2_name)} />{match.c2_short}</div>
                                </Cell>
                                <Cell className="txt">     
                                    <Icon style={{padding: '0 10px'}}name='clock' /> Full-Time <span style={{padding:'0 5px'}}>{match.gm_marker_1}-{match.gm_marker_2}</span>
                                </Cell>
                                <Cell></Cell>
                            </Row>
                        )}
                    </Body>
                </Table>
            </div>
        )
    }
    
    return (
        <div id="container-group-matches" className="group-matches">
            <h3 className="titulo-match">Group Matches</h3>
        </div>
    )
}

export default (props)=> {
    return (
        renderMatches(props)
    );
}