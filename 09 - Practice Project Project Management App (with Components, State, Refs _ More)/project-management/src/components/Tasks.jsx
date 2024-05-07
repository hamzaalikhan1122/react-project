import Button from "./Button";
import NewTask from "./NewTask";

function Tasks({ onAddTask, tasks, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold underline uppercase">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {!tasks ? (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul>
          {tasks?.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-2">
                <p>{task.text}</p>
                <Button onClick={() => onDeleteTask(task.id)} className="">
                  Delete
                </Button>{" "}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
