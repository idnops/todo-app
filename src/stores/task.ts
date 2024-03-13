import { defineStore } from "pinia";
import { Task } from "../types/task";
import { ref, computed, watch } from "vue";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref<Task[]>([]);

  if (localStorage.getItem("tasks")) {
    tasks.value = JSON.parse(localStorage.getItem("tasks")!);
  }

  watch(
    tasks,
    (newTasks: Task[]) => {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    { deep: true }
  );

  const importantTasks = computed(() => {
    return tasks.value.filter((task) => task.isFavorite);
  });

  const regularTasks = computed(() => {
    return tasks.value.filter((task) => !task.isFavorite);
  });

  const completeTask = (id: string): void => {
    const t = tasks.value.find((task) => task.id === id);
    t!.isCompleted = !t!.isCompleted;
  };

  const prioritizeTask = (id: string): void => {
    const t = tasks.value.find((task) => task.id === id);
    t!.isFavorite = !t!.isFavorite;
  };

  const deleteTask = (id: string): void => {
    const index = tasks.value.findIndex((task) => task.id === id);
    tasks.value.splice(index, 1);
  };

  const getTask = (id: string): Task | undefined => {
    return tasks.value.find((task) => task.id === id);
  };

  const addTask = (body: string, isFavorite: boolean = false): void => {
    const task: Task = {
      id: Date.now().toString(),
      body,
      isCompleted: false,
      isFavorite,
    };

    tasks.value = [task, ...tasks.value];
  };

  const updateTask = (id: string, body: string, isFavorite: boolean): void => {
    const task = tasks.value.find((task) => task.id === id);
    task!.body = body;
    task!.isFavorite = isFavorite;
  };

  return {
    tasks,
    importantTasks,
    regularTasks,
    completeTask,
    prioritizeTask,
    deleteTask,
    addTask,
    getTask,
    updateTask,
  };
});
