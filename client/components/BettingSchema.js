import { Button, Grid, Header, Segment, Checkbox } from 'semantic-ui-react'
import $ from 'jquery'

export function defineBettingBoxType(current_col, betting){
    if(current_col.type === 'other' ){
        let marker_show = ''
        if(current_col.player1){
            marker_show = current_col.player1.replace('[player1]', betting.country1)
        }else if(current_col.player2){
            marker_show = current_col.player2.replace('[player2]', betting.country2)
        }else if(current_col.other){
            marker_show = current_col.other
        }
        return (
            <span className='marker-player-other'><span>{marker_show}</span></span>
        )
    }
    return (
        <div className='marker-player-points'>
            <span className='marker-player player-1'>{current_col.player1}</span> - &nbsp;<span className='marker-player player-2'>{current_col.player2}</span>
        </div>
    )
}

export function renderBettingSchema(props){
    if(props.session.betting_schema.length > 0){
        const betting_data = props.session.betting_data
        const columns = parseInt(props.columns)
        let schema_column = []
        let schema_row = []
        $.each(props.session.betting_schema, function(item, value){
            schema_column.push(value)
            if( (item+1)%columns===0 ){
                schema_row.push(schema_column)
                schema_column = []
            }
        })
        if(schema_column.length > 0){
            schema_row.push(schema_column)
            schema_column = []
        }

        return (
            <div id="container-betting-schema" className="group-betting">
                <Grid columns={columns}>
                    {schema_row.map((current_row, i) =>
                        <Grid.Row key={i}>
                            {current_row.map((current_col, j) =>
                                <Grid.Column key={j}>
                                    <Segment className="box-layout">
                                        <Checkbox 
                                            className='marker-bet-checkout' 
                                            name='betting_data' 
                                            disabled={props.session.dom.check_disabled} 
                                            onChange={e => props.current.OptionBetChange(e, current_col.winnerOption)} 
                                            checked={betting_data[current_col.winnerOption].checked} />
                                        <Header as='h3' className={current_col.type==='other'?'other-option-bet':''}>
                                            {defineBettingBoxType(current_col, props.betting)}
                                        </Header>
                                    </Segment>
                                </Grid.Column>
                            )}
                        </Grid.Row>
                    )}
                </Grid>
                <Button style={{marginTop:'15px'}} floated='right' className='unchecked-bet'>Uncheck all</Button>
            </div>
        )
    }
    
    return (
        <div id="container-betting-schema" className="group-betting"></div>
    )
}

export default (props)=> {
    return (
        renderBettingSchema(props)
    );
}