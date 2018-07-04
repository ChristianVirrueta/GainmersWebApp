import { Button } from 'semantic-ui-react';
import { Link } from '../../routes'

export function renderChoices(props){
    if(props.session.category_item.length > 0){
        let current_slug = ''
        if(props.query.slug){
            current_slug = props.query.slug
        }
        return (
            <div id="container-group-categories" className="group-categories">
                {props.session.category_item.map((category, i) =>
                    <Link key={i} route={`/betting/`+category.slug}>
                        <a data-item-id={category.id} data-item-order={category.order}>
                            <Button primary className={category.slug+' '+(current_slug===category.slug?'category-active':'')}>
                                {category.name}
                            </Button>
                        </a>
                    </Link>
                )}
            </div>
        )
    }
    
    return (
        <div id="container-group-categories" className="group-categories"></div>
    )
}

export default (props)=> {
    return (
        renderChoices(props)
    );
}