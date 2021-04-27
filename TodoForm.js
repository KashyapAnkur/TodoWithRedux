import React from 'react';
import {useDispatch} from 'react-redux';


function TodoForm() {

    const dispatch = useDispatch();

    const addList = (e) => {
        e.preventDefault();
        if(e.target.todo.value.length) {
            dispatch({type: "todo/add", newTodo: e.target.todo.value});
        } else {
            alert("Enter todo");
        }
    }

    return (
        <>
            <form onSubmit={addList}>
                <input type="text" name="todo" placeholder="Enter todo" />
                <button>Add todo</button>
            </form><br />
        </>
    )
}

export default TodoForm;