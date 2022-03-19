import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo,setTodo] = useState("");

  return (
    <div className="App">
      <h1>todos</h1>
      <AddTodo />
    </div>
  );
}

export default App;
