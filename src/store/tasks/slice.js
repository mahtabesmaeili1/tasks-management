import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxTasks: 20,
  tasks: [
    { id: 1, task: "Pick up new glasses", completed: true },
    { id: 2, task: "Buy airco", completed: false },
    { id: 3, task: "Take packages to return", completed: false },
    { id: 4, task: "Order dog food", completed: true },
  ],
  showCompletedTasks: false,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    changeMaxTasks: (state, action) => {
      state.maxTasks = action.payload;
      state.tasks.length = action.payload;
    },
    addTask: (state, action) => {
      const task = action.payload;
      const newTask = { id: state.tasks.length + 1, task, completed: false };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      const updatedList = state.tasks.filter((task) => task.id !== id);
      state.tasks = updatedList;
    },
    toggleCompleted: (state, action) => {
      const taskId = action.payload;
      const updatedTaskList = state.tasks.map((t) => {
        return t.id === taskId ? { ...t, completed: !t.completed } : t;
      });
      state.tasks = updatedTaskList;
    },
    toggleShowCompleted: (state) => {
      state.showCompletedTasks = !state.showCompletedTasks;
    },
  },
});
export const {
  addTask,
  deleteTask,
  toggleCompleted,
  toggleShowCompleted,
  changeMaxTasks,
} = taskSlice.actions;
export default taskSlice.reducer;
