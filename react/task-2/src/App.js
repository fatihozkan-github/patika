import { useEffect, useState } from 'react';
import './App.css';
import ListTile from './components/ListTile';

const initialTodoList = [
  { title: "Learn JavaScript", completed: false },
  { title: "Learn React", completed: false },
  { title: "Have a life!", completed: false },
];

function App() {
  const [todoList, setTodoList] = useState(initialTodoList)

  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  return (
    <ListTile setTodoList={setTodoList} todoList={todoList} />
  );
}

export default App;
