import { useState } from "react"

export default function ToDoInput(props) {
    const { handleAddTodos, setTodoValue, todoValue } = props
    //define a stateful variable to be able to set the 'todovalue' variable
    // whith the input from the user

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter to do..."/>

            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}