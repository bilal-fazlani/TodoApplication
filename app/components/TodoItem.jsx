
import React from "react"
import {connect} from "react-redux"

let TodoItem = ({
    completed,
    text,
    onItemClick,
    onDeleteClick,
    id
})=>{
    return <a href="#" onClick={(e)=>{e.preventDefault(); onItemClick(id)}}
              className={"list-group-item clearfix"+ (completed === false? "": " list-group-item-danger completed")}>
        <span className="list-item-text" >
            {text}
        </span>

        <button className="btn btn-xs btn-danger pull-right" onClick={()=>onDeleteClick(id)}>
            <span className="glyphicon glyphicon-trash"></span>
        </button>
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