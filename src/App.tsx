import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputField from './components/InputField';

function App() {
  interface Todo {
    id: string,
    title: string,
    description: string,
  }
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addItemToList = (obj:Todo) => {    
    setTodoList(prevTodoList => [...prevTodoList, obj]);
  };

  return (
    <div className="App">
      <Header />
      <InputField addItemToList={addItemToList}/>
     
    </div>
  );
}

export default App;
