import TodoItem from "./TodoItem"
import React from "react"
import { connect } from "react-redux"

let TodoList = ({
    todos
})=>{
    return <div id="todoList" className="list-group">
        {todos.map((t)=> <TodoItem {...t} key={t.id} />)}
    </div>
}


const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t=>t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t=>!t.completed);
        default:
            return todos;
    }
}

TodoList = connect((state)=>{
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
})(TodoList)

export default TodoList