import { useSelector } from "react-redux/es/exports";
import { selectTask } from "../store/tasks/selectors";
import AddTaskForm from "./AddTaskForm";
import {
  deleteTask,
  toggleCompleted,
  toggleShowCompleted,
} from "../store/tasks/slice";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
const TaskList = () => {
  const dispatch = useDispatch();
  const tasksData = useSelector(selectTask);
  const [completed, setCompleted] = useState(false);

  const showCompletedCheckbox = () => {
    dispatch(toggleShowCompleted());
  };
  return (
    <div>
      {" "}
      <p> Maximum amount of tasks: {tasksData.maxTasks}</p>
      <p style={{ color: "red" }}> NOT completed tasks:</p>
      <input
        type="checkbox"
        checked={tasksData.showCompletedTasks}
        onChange={showCompletedCheckbox}
      />
      {tasksData.tasks
        .filter((task) => tasksData.showCompletedTasks || !task.completed)
        .map((task) => (
          <li style={{ listStyle: "none", lineHeight: 3 }}>
            <label>
              {" "}
              {task.task}, Completed?{" "}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleCompleted(task.id))}
              />
            </label>
            {/* <button
              style={{ color: "red" }}
              onClick={() => dispatch(deleteTask(task.id))}
            >
              {" "}
              Delete the task
            </button> */}
          </li>
        ))}
      <div>
        {" "}
        <AddTaskForm />
      </div>{" "}
    </div>
  );
};
export default TaskList;
