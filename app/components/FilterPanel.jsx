import FilterLink from "./FilterLink"
import React from "react"

export default ()=> {
    return <div id="filterPanel">
        Show:  &nbsp;
        <FilterLink filter="SHOW_ALL" >All</FilterLink> &nbsp;
        <FilterLink filter="SHOW_COMPLETED" >Completed</FilterLink>  &nbsp;
        <FilterLink filter="SHOW_ACTIVE" >Acive</FilterLink>
    </div>
}