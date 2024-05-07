import Tasks from "./Tasks";

function SelectedProject({
  project,
  onDelete,
  tasks,
  onAddTask,
  onDeleteTask,
}) {
  //   console.log(project, "Project selected");
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-600">{formattedDate}</p>
        <p className="mb-4 text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default SelectedProject;
