import FilterLink from "./FilterLink"
import React from "react"

export default ()=> {
    return <ul id="filterPanel" className="nav nav-pills nav-justified">

        <FilterLink filter="SHOW_ALL" >All</FilterLink>
        <FilterLink filter="SHOW_COMPLETED" >Completed</FilterLink>
        <FilterLink filter="SHOW_ACTIVE" >Acive</FilterLink>
    </ul>
}