import { Tab } from 'semantic-ui-react'
import $ from 'jquery'
import ContentTab from './ContentTab'

export function renderStages(props){
    if(props.session.current_category.id){

        //TABS
        if(props.session.current_category.childs.length > 0){
            const group_stages = props.session.current_category.childs
            let ItemTabs = []
            let GroupTabs = []
            $.each(group_stages, function(i, group_stage){
                if($.inArray(group_stage.ct_slug, ItemTabs) === -1){
                    GroupTabs.push({
                        menuItem: group_stage.ct_name, 
                        menuRender: []
                    })
                    ItemTabs.push(group_stage.ct_slug)
                }
                GroupTabs[GroupTabs.length-1].menuRender.push(group_stage)
            })
            
            if(GroupTabs.length > 0){
                const GroupContentTabs = GroupTabs.map((group, k) => ({
                    menuItem: group.menuItem,
                    render: () => <Tab.Pane attached={false}><ContentTab menu_key={k} menu_render={group.menuRender}/></Tab.Pane>
                }))
                if(GroupContentTabs.length > 0){
                    return (
                        <div id="container-group-stages" className="group-stages">
                            <Tab activeIndex={props.session.tabs.key} onTabChange={props.current.handleTabSelect} menu={{ secondary: true, pointing: true }} panes={ GroupContentTabs }/>
                        </div>
                    )
                }
            }
        }
    }
    
    return (
        <div id="container-group-stages" className="group-stages"></div>
    )
}

export default (props)=> {
    return (
        renderStages(props)
    );
}