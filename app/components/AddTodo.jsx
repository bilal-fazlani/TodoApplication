import React from "react"
import {connect} from "react-redux"

class AddTodo extends React.Component{

    constructor(props){
        super(props)
        this.index = 0;

        this.state = {
            inputText : ""
        }
    }

    render(){

        let {buttonText = "Add",
            onButtonClick
            } = this.props;

        return <div id="addTodo">
            <form >
                <div className="input-group">
                    <input placeholder="todo"
                           className="form-control"
                           type="text"
                           onChange={(e)=>this.setState({inputText:e.target.value})}
                           value={this.state.inputText}
                           ref={(node)=> this.input = node}></input>

                    <span className="input-group-btn">
                        <input className="btn btn-primary"
                           type="submit"
                           disabled={(this.state.inputText.trim().length === 0)}
                           value={buttonText}
                           onClick={(e)=>{
                               e.preventDefault();
                               onButtonClick(this.input.value);
                               this.state.inputText = ""
                           this.setState({inputText:""})}}
                           ref={(node)=>this.button=node}
                    />
                </span>
                </div>
            </form>
        </div>
    }
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