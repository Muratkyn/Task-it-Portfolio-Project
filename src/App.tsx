import React, { useState } from 'react';
import './App.css';
import {InputField} from './components/InputField';
import { Todo } from './Archive';
import TodoList from './components/TodoList';


const App:React.FC =() => {


  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos ([...todos, {todo: todo, id:Date.now(), isDone:false} ])
      setTodo("");
    }
    
  }
  console.log(todos)

  return (
    <div className="App">
      <span className= "heading">TASK-IT</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      
      {/* {todos.map(t => (<li>{t.todo}</li>))} */}


    </div>
  );
}

export default App;