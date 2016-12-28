import React from "react"
import AddTodo from "./AddTodo"
import FilterPanel from "./FilterPanel"
import TodoList from "./TodoList"
import {connect} from "react-redux"

class TodoApp extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        let{currentId} = this.props;

        return (<div id="todoApp" className="panel panel-default">

            <div className="panel-heading">
                <div className="panel-title">
                    <h2>Todo List</h2>
                </div>
            </div>
            <div className="panel-body">
                <AddTodo currentId={currentId} />
                <br/>
                <FilterPanel />
                <br/>
                <TodoList />
            </div>
        </div>);

    }
}


TodoApp = connect(
    (state)=>{return {
        todos : state.todos,
        visibilityFilter: state.visibilityFilter,
        currentId: state.currentId
}}
)(TodoApp);

export default TodoApp;