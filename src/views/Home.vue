<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import TaskList from "../components/TaskList.vue";
import TaskCreate from "../components/TaskCreate.vue";
import { useTaskStore } from "../stores/task";

const taskStore = useTaskStore();
const { importantTasks, regularTasks } = storeToRefs(taskStore);
const { addTask } = taskStore;
onMounted(() => {
  if (!importantTasks.value.length && !regularTasks.value.length) {
    addTask("Create first task", true);
    setTimeout(() => {
      addTask("Delete Completed task");
    }, 0);
  }
});
</script>

<template>
  <div class="min-h-screen bg-slate-900 relative pb-20">
    <div class="container mx-auto">
      <div class="p-4 pt-[100px] mb-32 text-center text-white">
        <h1 class="text-3xl capitalize font-semibold">Task Manager</h1>
      </div>

      <TaskList
        :list="importantTasks"
        title="Important Tasks"
        hint="Here will be important tasks. To prioritize the task click on star icon
        on the task..."
      />

      <TaskList
        :list="regularTasks"
        title="Regular Tasks"
        hint="Here will be regular tasks. To create the task fill the form below..."
      />
    </div>
  </div>
  <TaskCreate />
</template>
