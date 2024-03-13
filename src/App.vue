<script setup lang="ts">
import { storeToRefs } from "pinia";
import TaskList from "./components/TaskList.vue";
import { useTaskStore } from "./stores/task";

const taskStore = useTaskStore();
const { importantTasks, regularTasks } = storeToRefs(taskStore);
</script>

<template>
  <div class="min-h-screen bg-slate-900 p-6">
    <div class="container mx-auto">
      <div class="p-4 text-center text-white">
        <h1 class="text-3xl capitalize font-semibold">Task Manager</h1>
      </div>

      <TaskList :list="importantTasks" title="Important" />

      <TaskList :list="regularTasks" title="Tasks" />
    </div>
  </div>
</template>
