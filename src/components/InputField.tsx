import React, { useState } from 'react';
import AddToDoButton from './AddToDoButton';

interface Todo {
  id: string,
  title: string,
  description: string,
}

interface AddItemFunc {
  addItemToList(obj:Todo) : void;
}

const InputField: React.FC<AddItemFunc> = (props) => {
  const [todoItem, setTodoItem] = useState({ id: Math.random().toString(), title: '', description: '', done: false });

  

  const createToDoItem = (event: React.FormEvent) => {
    event.preventDefault();
    if (!todoItem.title || !todoItem.description) {
      alert('Please fill out all fields!');
      return;
    }
    // const obj = {
    //   id: Math.random().toString(),
    //   title: todoItem.title,
    //   description: todoItem.description,
    // }
    props.addItemToList(todoItem);
    setTodoItem({ ...todoItem, id: todoItem.id+1, title: '', description: '' });
  }

  const handleInputChange = (event:React.FormEvent) => {
    const { name } = event.target  as HTMLInputElement;
    const { value } = event.target as HTMLInputElement;
    setTodoItem({ ...todoItem, [name]: value });
  };
  
  return (
    <form className="form" role="form">
    <label className="form__title--label">Title</label>
    <input className="form__title--input input" type="text" name='title' value={ todoItem.title }
      onChange={handleInputChange}></input>
    <label className="form__description--label">Description</label>
    <input className="form__description--input input " type="text" name='description' value={ todoItem.description }
      onChange={handleInputChange}></input>
    <AddToDoButton onClick={ createToDoItem } />
  </form>
  )
}

export default InputField;