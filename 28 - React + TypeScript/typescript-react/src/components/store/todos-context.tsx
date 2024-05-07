import React, { useState } from "react";
import Todo, { TodoType } from "../../models/todo"; // Ensure this path is correct

type TodosContextObj = {
  items: TodoType[]; // Ensure this type is imported if it's defined elsewhere
  addTodo: (todoText: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([]); // Use TodoType[] if it's defined elsewhere

  const addTodoHandler = (todoText: string) => {
    const newTodo = Todo(todoText); // Corrected usage without `new`
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
