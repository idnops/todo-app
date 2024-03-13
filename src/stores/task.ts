import { defineStore } from "pinia";
import { Task } from "../types/task";
import { reactive, computed } from "vue";

export const useTaskStore = defineStore("task", () => {
  const tasks = reactive<Task[] | []>([
    {
      id: "asd",
      title: "test",
      content: "test",
      isCompleted: false,
      isFavorite: false,
    },
    {
      id: "asd2",
      title: "test2",
      content: "test2",
      isCompleted: false,
      isFavorite: true,
    },
    {
      id: "asd3",
      title: "test3",
      content: "test3",
      isCompleted: false,
      isFavorite: false,
    },
  ]);

  const importantTasks = computed(() => {
    return tasks.filter((task) => task.isFavorite);
  });

  const regularTasks = computed(() => {
    return tasks.filter((task) => !task.isFavorite);
  });

  const completeTask = (id: string) => {
    const t = tasks.find((task) => task.id === id);
    t!.isCompleted = !t!.isCompleted;
  };

  const prioritizeTask = (id: string): void => {
    const t = tasks.find((task) => task.id === id);
    t!.isFavorite = !t!.isFavorite;
  };

  const deleteTask = (id: string) => {
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
  };

  return {
    tasks,
    importantTasks,
    regularTasks,
    completeTask,
    prioritizeTask,
    deleteTask,
  };
});
