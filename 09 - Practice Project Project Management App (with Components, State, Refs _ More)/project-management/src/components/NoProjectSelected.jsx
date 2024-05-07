import noProject from "../assets/no-projects.png";
import Button from "./Button";
function NoProjectSelected({ onSelection }) {
  return (
    <div className="mt-24 text-center flex flex-col items-center w-2/3 gap-3">
      <img src={noProject} alt="No project image" width={100} height={100} />
      <h2 className="text-xl font-bold text-stone-500">No Project Selected</h2>
      <p className="text-stone-400 mb-4">
        Select a Project or get started with a new one
      </p>
      <p className="text-stone-400 mb-4">
        <Button onClick={onSelection}>Create a New Project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
