import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoArray , setTodoArr] = useState([])
  const [todoList , setTodoLine] = useState('')

  let addList = () => {
    todoArray.push(todoList)
    console.log(todoArray)
    setTodoLine("")
    setTodoArr([...todoArray])
  }
  function deteleAll(){
    setTodoArr([])
  }
  return (
    <div className="App">
      <header className="App-header">
    <input
    onChange={p => {
      setTodoLine(p.target.value)
    }} 
    value={todoList} 
    placeholder = 'Enter your todo value'>      
    </input>
    <ol>
      {todoArray.map((text , index) => {
        function remove(){
        let one = todoArray.filter(delOne => delOne !== text)
          setTodoArr(one)
        }
        return(
          <li key={index}>{text} <button onClick={remove}>Remove</button></li>
        )
      })}
    </ol>
    <button onClick={addList}>List</button>
    <button onClick={deteleAll}>Delete All</button>
      </header>
    </div>
  );
}

export default App;
