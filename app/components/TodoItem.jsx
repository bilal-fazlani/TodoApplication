
import React from "react"
import {connect} from "react-redux"

let TodoItem = ({
    completed,
    text,
    onItemClick,
    onDeleteClick,
    id
})=>{
    return <a href="#" className={"list-group-item list-item "+ (completed === false? "": "completed")}>
        <span className="list-item-text" onClick={()=>onItemClick(id)}>
            {text}
        </span>

        <span className="delete-button" onClick={()=>onDeleteClick(id)}>X</span>
    </a>
}

TodoItem = connect(null
,(dispatch)=>{
    return {
        onItemClick : (id) => dispatch({
            type:"TOGGLE",
            id
        }),
        onDeleteClick: (id) => dispatch({
            type:"REMOVE",
            id
        })
    }
})(TodoItem)

export default TodoItem