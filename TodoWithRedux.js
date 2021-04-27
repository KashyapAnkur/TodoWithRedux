import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function TodoWithRedux() {
    return (
        <center>
            <TodoForm />
            <br />
            <TodoList />
        </center>
    )
}

export default TodoWithRedux;