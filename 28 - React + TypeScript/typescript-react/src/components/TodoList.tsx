import React, { useContext } from "react";
import styles from "./TodoList.module.css";
import Todo from "../models/todo";
import { TodosContext } from "./store/todos-context";

const TodoList: React.FC<{
  item: Todo;
}> = ({ item }) => {
  const todosCtx = useContext(TodosContext);
  return (
    <button
      className={`${styles.item} w-full text-left `}
      onClick={() => {
        todosCtx.deleteTodo(item.id);
      }}
    >
      <li key={item.id} className="px-4 font-medium">
        {item.text}
      </li>
    </button>
  );
};

export default TodoList;
