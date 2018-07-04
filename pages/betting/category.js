import Layout from '../../client/layouts/layoutMain'
import Router from 'next/router'
import Auth from '../../client/session/authSession'
import $ from 'jquery'
import { Grid } from 'semantic-ui-react'
import Choices from '../../client/components/Choices'
import Stages from '../../client/components/Stages'
import Matches from '../../client/components/Matches'
import { getCategoriesFind } from '../../server/models/categories'
import { getGroupStagesFind } from '../../server/models/group_stages'
import { getGroupMatchesFind } from '../../server/models/group_matches'

class Betting extends Auth {
    constructor(props) {
        super(props)
        this.state.category_item = []
        this.state.current_category = {}
        this.state.tabs = { active: false, key: 0, category_items: [] }
        this.state.group_matches = []
    }

    componentWillMount(){
        if(this.state.category_item.length === 0){
            this.fn_categories_init_load(this)
        }
    }

    componentWillUpdate(nextProps, nextState){
        //console.log("WILL UPDATE")
        //console.log(nextState)
        const current = this
        if(current.props.query !== nextProps.query){
            current.fn_subcategories_load(current, nextProps, current.state.category_item)
        }
    }

    componentDidMount(){
        this.sessionValidate(Router, { onSession: true })
    }

    handleTabSelect = (e, { activeIndex }) => this.setState({ tabs: { active: true, key: activeIndex, category_items: this.state.tabs.category_items } })

    fn_categories_init_load(current){
        const Categories = getCategoriesFind({ parent_id: 'null' })
        Categories.then(function(res1){
            if(res1.data.length > 0){
                current.setState({ category_item: res1.data })
                current.fn_subcategories_load(current, current.props, res1.data)
            }
        }).catch(function(error){
            console.log("Error fn_categories_init_load")
            console.log(error)
        })
    }

    fn_subcategories_load(current, props, categories){
        let current_parent = []
        $.each(categories, function(i, parent){
            if(parent.slug === props.query.slug){
                current_parent = parent
                current_parent.childs = []

                const SubCategories = getGroupStagesFind({ parent_id: parent.id })
                SubCategories.then(function(res2){
                    if(res2.data.length > 0){
                        current_parent.childs = res2.data
                        
                        if(!current.state.tabs.active){
                            let array_childs = []
                            $.each(res2.data, function(i, child){
                                if($.inArray(child.ct_id, array_childs) === -1){
                                    array_childs.push(child.ct_id)
                                }
                            })
                            current.setState({ tabs: { active: true, key: 0, category_items: array_childs } })
                        }
                    }
                    current.setState({ current_category: current_parent })
                    current.fn_matches_load(current, current_parent)
                }).catch(function(error){
                    console.log("Error fn_subcategories_load")
                    console.log(error)
                })
            }
        })
    }

    fn_matches_load(current, current_category){
        let findObject = { category_id: current_category.id }

        if(current.state.tabs.category_items.length > 0){
            findObject = { category_id: current.state.tabs.category_items }
        }
        const Matches = getGroupMatchesFind(findObject)
        Matches.then(function(res){
            if(res.data.length > 0){
                current.setState({ group_matches: res.data })
            }
        }).catch(function(error){
            console.log("Error fn_matches_load")
            console.log(error)
        })
    }

    render() {
        return (
            <Layout {...this.props} style={'session'} navbar={true} footer={true} session={this.state}>
                <Grid container stackable verticalAlign='middle' >
                    <Grid.Row centered ><Choices query={this.props.query} session={this.state}/></Grid.Row>
                    <Grid.Row centered ><Stages query={this.props.query} session={this.state} current={this}/></Grid.Row>
                    <Grid.Row centered ><Matches query={this.props.query} session={this.state}/></Grid.Row>
                </Grid>
            </Layout>
        );
    }
}
export default Betting;