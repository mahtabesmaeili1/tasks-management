import { useSelector } from "react-redux/es/exports";
import { selectTask } from "../store/tasks/selectors";
import AddTaskForm from "./AddTaskForm";
import {
  deleteTask,
  toggleCompleted,
  toggleShowCompleted,
  changeMaxTasks,
} from "../store/tasks/slice";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
const TaskList = () => {
  const dispatch = useDispatch();
  const [maximumTask, setMaximumTask] = useState(20);
  const tasksData = useSelector(selectTask);

  const showCompletedCheckbox = () => {
    dispatch(toggleShowCompleted());
  };
  return (
    <div>
      {" "}
      <p>
        {" "}
        Maximum amount of tasks:{" "}
        <input
          type="text"
          value={maximumTask}
          onChange={(e) => {
            setMaximumTask(e.target.value);
          }}
        />{" "}
        <button onClick={() => dispatch(changeMaxTasks(maximumTask))}>
          {" "}
          task amount
        </button>
      </p>
      <p style={{ color: "green" }}> TASKS:</p>
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
            <button
              style={{ color: "red" }}
              onClick={() => dispatch(deleteTask(task.id))}
            >
              {" "}
              Delete the task
            </button>
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
