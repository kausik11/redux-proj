const initialstate = {
    task : [{id:1,text:"hii"}]
}

const taskreducer = (state = initialstate, action)=>{
   switch (action.type) {
    case 'ADD-TASK':
        return{
            ...state,
            task:[...state.task, action.payload]
        }
    case 'DELETE-TASK':
        return{
            ...state,
            task: state.task.filter(ele=>ele.id !== action.payload)
        }
    default:
        return state;
   }
}

export default taskreducer;
