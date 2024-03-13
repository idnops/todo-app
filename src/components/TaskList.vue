<script lang="ts" setup>
import { Task } from "../types/task";
import TaskItem from "./TaskItem.vue";

const { list, title } = defineProps<{
  list: Task[];
  title: string;
  hint: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-4 relative mb-32">
    <h2 class="text-2xl text-white font-medium">{{ title }}</h2>

    <TransitionGroup name="fade">
      <div
        class="p-4 bg-slate-800 border border-slate-700 border-dashed opacity-40 rounded-xl text-white text-sm w-full"
        v-if="!list.length"
      >
        {{ hint }}
      </div>
      <TaskItem v-for="task in list" :key="task.id" :task="task" />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
  z-index: 1;
}
</style>
