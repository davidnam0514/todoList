import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([])
 
  useEffect(() => {
    fetch('http://localhost:8000/todo-list')
    .then(res => res.json())
    .then(data => setTodoList(data.data))
  }, [])

  const addTodo = (todo) => {
    fetch('http://localhost:8000/add-todo', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo)
    }).then(response => {
      return response.json()
    })
    .then(data => setTodoList(data.data)) 
  }

  return (
    <div className="App">
      <TodoInput addTodo={addTodo}/>"
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
