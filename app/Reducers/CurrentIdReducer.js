/**
 * Created by bilalmf on 26/12/16.
 */

export default (prev = 0, action)=>{

    if(action.type === "INCREMENT_ID"){
        return prev + 1;
    }

    return prev;
}