import { useState } from "react";
import { addTask } from "../store/tasks/slice";
import { useDispatch } from "react-redux";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New task:", task);
    dispatch(addTask(task));
    setTask("");
  };
  return (
    <div>
      <h3> Add a new task: </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};
export default AddTaskForm;
