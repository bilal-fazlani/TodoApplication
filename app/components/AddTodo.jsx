import React from "react"
import {connect} from "react-redux"

let AddTodo = ({
    buttonText = "Add",
    onButtonClick
}) => {
    let input;
    return <div id="addTodo">
        <form >
            <div className="input-group">
                <input placeholder="todo" className="form-control" type="text" ref={(node)=> input = node}></input>
                <span className="input-group-btn">
                    <input className="btn btn-primary" type="submit" value={buttonText} onClick={(e)=>{
                        e.preventDefault();
                        onButtonClick(input.value);
                        input.value = ""}
                    } />
                </span>
            </div>
        </form>
    </div>
}

let index =0;

AddTodo = connect(null, (dispatch)=>{
    return {
        onButtonClick: (inputValue) => {
            if(inputValue != '')
            {dispatch({
                type:"ADD",
                id:index++,
                text: inputValue
        })}}
    }
})(AddTodo)

export default AddTodo