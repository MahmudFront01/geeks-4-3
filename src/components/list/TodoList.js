import React from 'react'
import Todo from '../todo/Todo'
import classes from './TodoList.module.css'


const TodoList = ({tasks, handleDelete}) => {
    return (
        <div>
            {tasks.map((item) => <Todo key={item.id} todo={item} handleDelete={handleDelete}/>)}
        </div>
    )
}

export default TodoList