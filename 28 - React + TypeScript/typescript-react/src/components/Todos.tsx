import React, { useContext } from "react";
import TodoList from "./TodoList";
import styles from "./Todos.module.css";
import { TodosContext } from "./store/todos-context";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoList item={item} />
      ))}
    </ul>
  );
};

export default Todos;
