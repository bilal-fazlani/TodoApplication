import React from "react"
import {connect} from "react-redux"

class AddTodo extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        let {buttonText = "Add",
            onButtonClick,
            onTextChange
            } = this.props;

        return <div id="addTodo">
            <form >
                <div className="input-group">
                    <input placeholder="todo"
                           className="form-control"
                           type="text"
                           onChange={(e)=>this.props.onTextChange(e.target.value)}
                           value={this.props.inputText}
                           ref={(node)=> this.input = node}></input>

                    <span className="input-group-btn">
                        <input className="btn btn-primary"
                           type="submit"
                           disabled={(this.props.inputText.trim().length === 0)}
                           value={buttonText}
                           onClick={(e)=>{
                               e.preventDefault();
                               onButtonClick(this.input.value);
                               this.props.onTextChange("")
                           this.setState({inputText:""})}}
                           ref={(node)=>this.button=node}
                    />
                </span>
                </div>
            </form>
        </div>
    }
}

AddTodo = connect((state)=>{
    return {
        inputText: state.inputText
    }
}, (dispatch, ownProps)=>{
    return {
        onButtonClick: (inputValue) => {
            if(inputValue != '')
            {
                dispatch({
                    type:"INCREMENT_ID"
                })

                dispatch({
                type:"ADD",
                id:ownProps.currentId,
                text: inputValue
        })

            }},
        onTextChange: (inputText)=>{
            dispatch({
                type:"INPUT_TEXT",
                inputText
            })
        }
    }
})(AddTodo)

export default AddTodo