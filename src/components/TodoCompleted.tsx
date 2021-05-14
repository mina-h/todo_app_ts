import React from 'react';

interface Todo {
  id: string,
  title: string,
  description: string,
  done: boolean,
}

interface Properties {
  todoItem: Todo,
  markItemAsUncompleted(obj:Todo): void;

}
const TodoCompleted: React.FC<Properties> = (props
  // {
  // todoItem,
  // title,
  // // description,
  // markItemAsUncompleted,
  // removeCompletedItem,
// }
) => (
    <article className="item__done">
      <li className="item__description">
        <p className="item__title">{props.todoItem.title} </p>
        <p className="item__desc">{props.todoItem.description}</p>
      </li>
      <button className="item__completed" onClick={() => props.markItemAsUncompleted(props.todoItem)}>Undone</button>
      {/* <button className="item__remove" onClick={() => props.removeCompletedItem(todoItem)}>Remove</button> */}
    </article>
);

export default TodoCompleted;
