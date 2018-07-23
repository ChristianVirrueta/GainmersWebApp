import { Table, Flag } from 'semantic-ui-react'
import { handelize } from '../utils/Functions'

export function renderContentTab(props){
    if(props.menu_render.length > 0){
        //CONTENT TABS
        const { Header, Row, HeaderCell, Body, Cell } = Table

        return (
            <div id="container-content-tab" className={"content-tabs tab-item-"+props.menu_key}>
                <Table color={'black'} textAlign='center' inverted>
                    <Header >
                        <Row className="bg-header">
                            <HeaderCell width={3}/>
                            <HeaderCell>MP</HeaderCell>
                            <HeaderCell>W</HeaderCell>
                            <HeaderCell>D</HeaderCell>
                            <HeaderCell>L </HeaderCell>
                            <HeaderCell>GF</HeaderCell>
                            <HeaderCell>GA</HeaderCell>
                            <HeaderCell>+/-</HeaderCell>
                            <HeaderCell className="points" >Points</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {props.menu_render.map((content, i) =>
                            <Row key={i}>
                                <Cell textAlign='left'><Flag className={handelize(content.cn_code+'-'+content.cn_name)} /> {content.cn_short}</Cell>
                                <Cell>{content.gs_match_played}</Cell>
                                <Cell>{content.gs_win}</Cell>
                                <Cell>{content.gs_draw}</Cell>
                                <Cell>{content.gs_lost}</Cell>
                                <Cell>{content.gs_goal_for}</Cell>
                                <Cell>{content.gs_goal_against}</Cell>
                                <Cell>{content.gs_diff_goal}</Cell>
                                <Cell className="points" style={{background : '#18191a'}}>{content.gs_points}</Cell>
                            </Row>
                        )}
                    </Body>
                </Table>
            </div>
        )
    }

    return (
        <div id="container-content-tab" className={"content-tabs tab-item-"+props.menu_key}></div>
    )
}

export default (props)=> {
    return (
        renderContentTab(props)
    );
}