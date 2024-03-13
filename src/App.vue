<script setup lang="ts">
import TaskList from "./components/TaskList.vue";
import TaskCreate from "./components/TaskCreate.vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "./stores/task";

const taskStore = useTaskStore();
const { importantTasks, regularTasks } = storeToRefs(taskStore);
</script>

<template>
  <div class="min-h-[calc(100vh-110px)] bg-slate-900 relative mb-[110px]">
    <div class="container mx-auto">
      <div class="p-4 text-center text-white">
        <h1 class="text-3xl capitalize font-semibold">Task Manager</h1>
      </div>

      <TaskList :list="importantTasks" title="Important" />

      <TaskList :list="regularTasks" title="Tasks" />
    </div>
  </div>
  <TaskCreate />
</template>
