<script setup lang="ts">
import { ref } from "vue";
import TaskItem from "./components/TaskItem.vue";
const count = ref(3);
</script>

<template>
  <div class="min-h-screen bg-slate-900 p-6">
    <div class="container mx-auto">
      <div class="p-4 text-center text-white">
        <h1 class="text-3xl capitalize font-semibold">Task Manager</h1>
      </div>

      <button @click="count++" class="p-4 text-white">+</button>

      <div class="flex flex-col gap-4">
        <TransitionGroup name="list">
          <TaskItem v-for="n in count" :key="n" />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
