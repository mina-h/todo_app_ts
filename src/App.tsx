import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputField from './components/InputField';
import ListToDo from './components/ListToDo';

function App() {
  interface Todo {
    id: string,
    title: string,
    description: string,
    done: boolean,
  }
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addItemToList = (obj:Todo) => {    
    setTodoList(prevTodoList => [...prevTodoList, obj]);
  };

  const markItemAsCompleted = (obj:Todo) => {
    const updatedArray = JSON.parse(JSON.stringify(todoList));
    updatedArray.forEach((e:Todo) => {
      if (e.title === obj.title) {
        e.done = true;
      }
    });
    setTodoList([...updatedArray]);
  };

  const markItemAsUncompleted = (obj:Todo) => {
    const updatedArray = JSON.parse(JSON.stringify(todoList));
    updatedArray.forEach((e:Todo) => {
      if (e.title === obj.title) {
        e.done = false;
      }
    });
    setTodoList([...updatedArray]);
  };

  const removeCompletedItem = (obj:Todo) => {
    const newArray = JSON.parse(JSON.stringify(todoList));
    const filteredArray = newArray.filter((e:Todo) => e.id !== obj.id);
    setTodoList([...filteredArray]);
  };

  return (
    <div className="App">
      <Header />
      <InputField addItemToList={addItemToList}/>
      <section className="container">
        <ListToDo list={todoList}
        markItemAsCompleted={ markItemAsCompleted }
        markItemAsUncompleted={ markItemAsUncompleted}
        removeCompletedItem={ removeCompletedItem }
        />
      </section>
    </div>
  );
}

export default App;
