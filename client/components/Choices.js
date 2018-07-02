import Auth from '../session/authSession'
import $ from 'jquery'
import { getCurrentToken } from '../actions/authActions'
import { getCategoriesFind } from '../../server/models/categories'

class Choices extends Auth {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        const current = this
        var $container = $('#container-group-categories')
        if(localStorage && localStorage.jwtToken){
            $container.empty()

            let local = getCurrentToken(localStorage.jwtToken)
            const Categories = getCategoriesFind({ parent_id: 'null' })
            Categories.then(function(res){
                if(res.data.length > 0){
                    $.each(res.data, function(i, category){
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
                    })
                }
            }).catch(function(error){
                console.log(error)
            })
        }
    }

    render() {
        return (
            <div id="container-group-categories" className="group-categories"></div>
        );
    }
}
export default Choices