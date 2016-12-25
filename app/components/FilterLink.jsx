import React from "react"
import {connect} from "react-redux"

const Link = ({isActive, children, onLinkClick, count}) => {
    if(isActive === true){
        return <li role="presentation" className="active">
            <a href="#" >{children} <span className="badge">{count}</span></a>
            </li>

    }

    return <li role="presentation">
    <a href="#"
              onClick={(e)=> {
                  e.preventDefault();
                  onLinkClick();
              }
              }>{children} <span className="badge">{count}</span></a>
    </li>
}

let FilterLink = ({filter, visibilityFilter, dispatch,
    children, count}) => {
    return <Link
            onLinkClick={()=>dispatch({type:"SET_VISIBILITY", filter})}
            isActive={filter === visibilityFilter}
            count={count}
    >{children}</Link>
}

FilterLink = connect((state, ownProps)=>{
    return {
        visibilityFilter: state.visibilityFilter,
        count: getBadgeCount(ownProps.filter, state.todos)
    }
})(FilterLink);

const getBadgeCount = (filter, todos)=>{
    switch(filter){
        case "SHOW_ALL":
            return todos.length
        case "SHOW_COMPLETED":
            return todos.filter(x=>x.completed).length
        case "SHOW_ACTIVE":
            return todos.filter(x=>!x.completed).length
        default:
            return -1;
    }
}

export default FilterLink;
