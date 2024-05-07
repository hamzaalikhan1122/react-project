// class Todo {
//   id: string;
//   text: string;

//   constructor(todoText: string) {
//     this.text = todoText;
//     this.id = Math.random().toString(36);
//   }
// }

export type TodoType = {
  id: string;
  text: string;
};

function Todo(todoText: string): TodoType {
  return {
    id: Math.random().toString(36),
    text: todoText,
  };
}

export default Todo;
