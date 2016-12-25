import React from "react"
import {connect} from "react-redux"

const Link = ({isActive, children, onLinkClick}) => {
    if(isActive === true){
        return <li role="presentation" className="active">
            <a href="#" >{children}</a>
            </li>

    }

    return <li role="presentation">
    <a href="#" 
              onClick={(e)=> {
                  e.preventDefault();
                  onLinkClick();
              }
              }>{children}</a>
    </li>
}

let FilterLink = ({filter, visibilityFilter, dispatch, children}) => {
    return <Link
            onLinkClick={()=>dispatch({type:"SET_VISIBILITY", filter})}
            isActive={filter === visibilityFilter}
    >{children}</Link>
}

FilterLink = connect((state)=>{
    return {
        visibilityFilter: state.visibilityFilter
    }
})(FilterLink);

export default FilterLink;
