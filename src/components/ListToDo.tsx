import React from 'react';
import TodoUncompleted from './TodoUncompleted';
import TodoCompleted from './TodoCompleted';

interface Todo {
  id: string,
  title: string,
  description: string,
  done: boolean,
}

interface TodoList {
  list: Todo[],
  markItemAsUncompleted(obj:Todo): void;
  markItemAsCompleted(obj:Todo): void;
  removeCompletedItem(obj:Todo): void;

}

const ListToDo: React.FC<TodoList> = (props) => {
  console.log(props.list);
  const filterUncompleted = props.list.filter(e => e.done === false);
  const uncompletedTodos = filterUncompleted
    .map((todo) => <TodoUncompleted todoItem={todo} 
    key ={ todo.id }
    markItemAsCompleted={ props.markItemAsCompleted }
    />);

  const filterCompleted = props.list.filter(e => e.done === true);
  const completedTodos = filterCompleted
    .map((todo) => <TodoCompleted todoItem={todo} 
    key ={ todo.id }
    markItemAsUncompleted={ props.markItemAsUncompleted } 
    removeCompletedItem={ props.removeCompletedItem }/>);

  return (
    <>
    <ul className="todo" id="uncompleted">
      {uncompletedTodos}
    </ul>
    <ul className="todo" id="completed">
      {completedTodos}
    </ul>
    </>
  );
};

export default ListToDo;
