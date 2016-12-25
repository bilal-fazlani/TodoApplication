/**
 * Created by bilalmf on 25/12/16.
 */

export default (state = 'SHOW_ALL', action) => {

    switch(action.type){
        case "SET_VISIBILITY":
            return action.filter;
        default:
            return state;
    }
}