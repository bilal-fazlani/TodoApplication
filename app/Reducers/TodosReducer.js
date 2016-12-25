/**
 * Created by bilalmf on 25/12/16.
 */
export default (state = [], action)=>{

    switch(action.type){
        case "ADD":

            return [...state,{
                id:action.id,
                text:action.text,
                completed:false
            }]
        case "REMOVE":
            return state.filter(t=>t.id != action.id)
        case "TOGGLE":
            return state.map((t)=> (t.id === action.id) ? {...t, completed:!t.completed }: t)
        default:
            return state
    }
}