const initialState = {todo:[]};

function Todoreducer(state = initialState, action) {
    switch(action.type) {
        case "todo/add": {
            return {todo: state.todo.concat(action.newTodo)}
        }
        case "todo/delete": {
            return {todo: action.data}
        }
        case "todo/deleteAll": {
            return {todo: []}
        }
        default : {
            return initialState;
        }
    }
}

export default Todoreducer;