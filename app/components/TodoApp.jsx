import React from "react"
import AddTodo from "./AddTodo"
import FilterPanel from "./FilterPanel"
import TodoList from "./TodoList"
import {connect} from "react-redux"

class TodoApp extends React.Component{

    constructor(props){
        super(props)
        this.index =0;
    }


    render(){
        let{todos, visibilityFilter, dispatch} = this.props;


        return (<div id="todoApp">
            <h1>Todo List</h1>

            <AddTodo />
            <br/>
            <FilterPanel />
            <br/>
            <TodoList />

        </div>);

    }
}


TodoApp = connect(
    (state)=>{return {
    todos : state.todos,
    visibilityFilter: state.visibilityFilter
}}
)(TodoApp);

export default TodoApp;