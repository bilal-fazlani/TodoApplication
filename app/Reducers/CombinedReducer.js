/**
 * Created by bilalmf on 25/12/16.
 */
import VisibilityFilterReducer from "./VisibilityFilterReducer"
import TodosReducer from "./TodosReducer"
import InputTextReducer from "./InputTextReducer"
import {combineReducers} from "redux"

export default combineReducers({
    visibilityFilter: VisibilityFilterReducer,
    todos: TodosReducer,
    inputText: InputTextReducer
})