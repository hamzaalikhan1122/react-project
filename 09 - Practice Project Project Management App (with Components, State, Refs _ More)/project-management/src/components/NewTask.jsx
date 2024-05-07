import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <Input
        value={enteredTask}
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
  );
}

export default NewTask;
