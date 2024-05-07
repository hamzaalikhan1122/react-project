import React, { useContext, useRef } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "./store/todos-context";
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const textInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInput.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
    textInput.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={textInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
