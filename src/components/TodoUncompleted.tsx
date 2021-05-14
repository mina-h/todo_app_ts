import React from 'react';

interface Todo {
  id: string,
  title: string,
  description: string,
  done: boolean,
}

interface Properties {
  todoItem: Todo,
  markItemAsCompleted(obj:Todo): void;

}
const TodoUncompleted: React.FC<Properties> = (props) => (
    <article className="item__undone">
      <li className="item__description">
        <p className="item__title">{props.todoItem.title} </p>
        <p className="item__desc">{props.todoItem.description}</p>
      </li>
      <button className="item__completed" onClick={() => props.markItemAsCompleted(props.todoItem)}>Done</button>
    </article>
);

export default TodoUncompleted;