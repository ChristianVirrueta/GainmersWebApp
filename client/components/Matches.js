import Auth from '../session/authSession'
import $ from 'jquery'
import { getCurrentToken } from '../actions/authActions'
import { getCategoriesFind } from '../../server/models/categories'
import { Tab } from 'semantic-ui-react'

class Choices extends Auth {
    constructor(props) {
        super(props)
        this.state.Category = {}
        this.state.SubCategories = []
    }

    componentWillMount(){
        const current = this
        var $container = $('#container-group-matches')
        if(localStorage && localStorage.jwtToken){
            $container.empty()

            let local = getCurrentToken(localStorage.jwtToken)
            const Categories = getCategoriesFind({ slug: current.props.query.slug })
            Categories.then(function(res){
                if(res.data.length > 0){

                    const SubCategories = getCategoriesFind({ parent_id: res.data[0].id })
                    SubCategories.then(function(res){
                        if(res.data.length > 0){
                            $.each(res.data, function(i, subcategory){
                                console.log(subcategory)
                                /*
                                var active = false
                                if(current.props.query.slug){
                                    active = (current.props.query.slug === category.slug)?true:false
                                }
                                var $category_item = [
                                    '<a href="/betting/'+category.slug+'" data-item-id="'+category.id+'" data-item-order="'+category.order+'">', 
                                        '<button class="ui primary button '+category.slug+' '+(active?'category-active':'')+'" role="button">',
                                            category.name,
                                        '</button>',
                                    '</a>'
                                ]
                                $container.append($category_item.join(''))
                                */
                            })

                            const panes = [
                                { menuItem: 'Group A', render: () => <Tab.Pane attached={false}>Content</Tab.Pane> }
                            ]
                            $container.append(
                                '<div class="ui pointing secondary menu"><a class="item">Group A</a><a class="item">Group B</a></div><div class="ui segment tab">abc</div>'
                            )
                        }
                    })
                }

            }).catch(function(error){
                console.log(error)
            })

        }
    }

    render() {
        return (
            <div id="container-group-matches" className="group-matches"></div>
        );
    }
}
export default Choices