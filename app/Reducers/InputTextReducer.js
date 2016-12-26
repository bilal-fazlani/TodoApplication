/**
 * Created by bilalmf on 26/12/16.
 */
export default (prev = '', action)=>{
    if(action.type === 'INPUT_TEXT'){
        return action.inputText
    }
    return prev;
}