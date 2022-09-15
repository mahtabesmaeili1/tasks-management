import { useSelector } from "react-redux/es/exports";
import { selectTask } from "../store/tasks/selectors";
import AddTaskForm from "./AddTaskForm";
const TaskList = () => {
  const tasksData = useSelector(selectTask);
  console.log("list of tasks:", tasksData.tasks);
  return (
    <div>
      {" "}
      <p> Maximum amount of tasks: {tasksData.maxTasks}</p>
      <p> Show completed tasks: {tasksData.showCompletedTasks}</p>
      {tasksData.tasks.map((task) => (
        <li>
          {" "}
          {task.task}, Completed: {task.completed ? "yes" : "no"}
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
