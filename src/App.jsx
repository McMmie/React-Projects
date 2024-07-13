import { useState,useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {

//create stateful variables by using 'useState' hook
  const [todos, setTodos] = useState([])
  
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }
  //create a function to update our list with input from user
  function handleAddTodos(newItem) {
    //declare a variable to recieve new items from input and update our list
    const newList = [...todos, newItem]
    persistData(newList)
    setTodos(newList)

  }
  
  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleUpdate(index) {
    const update = todos[index]
    setTodoValue(update)
    handleDelete(index)

  }

  useEffect(() => {
    //check if local storage exists
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem("todos")

    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])
  return (
    <>
      <ToDoInput todoValue={todoValue}
                 handleAddTodos={handleAddTodos}
                 setTodoValue={setTodoValue}
                 />

      <ToDoList handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                todos={todos}/>
    </>
  )
}

export default App
