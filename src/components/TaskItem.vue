<script lang="ts" setup>
import {
  CheckIcon,
  StarIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/vue/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/vue/24/outline";
import { Task } from "../types/task";
import { useTaskStore } from "../stores/task";

const { completeTask, prioritizeTask, deleteTask } = useTaskStore();

const { task } = defineProps<{
  task: Task;
}>();
</script>

<template>
  <div
    class="rounded-xl py-4 px-8 ring-slate-700 bg-slate-800 text-white flex justify-between items-center transition-all w-full z-10 hover:ring-1"
    :class="[task.isCompleted ? 'opacity-60' : '']"
  >
    <div class="flex items-center gap-4 w-[80%]">
      <button
        class="size-6 rounded-full ring-1 ring-slate-400 flex items-center justify-center hover:ring-white transition-all flex-shrink-0"
        :class="[task.isCompleted ? 'bg-white' : '']"
        @click="completeTask(task.id)"
      >
        <CheckIcon v-if="task.isCompleted" class="size-4 text-black" />
      </button>
      <div>
        <h4 :class="[task.isCompleted ? 'line-through' : '']">
          {{ task.body }}
        </h4>
      </div>
    </div>
    <div class="flex justify-center items-center gap-2">
      <button class="p-2" @click="prioritizeTask(task.id)">
        <StarIcon class="size-4 text-yellow-200" v-if="task.isFavorite" />
        <StarIconOutline class="size-4 text-neutral-400" v-else />
      </button>
      <button
        class="hover:bg-slate-700 p-2 rounded flex justify-center items-center text-neutral-400 hover:text-white transition-all"
      >
        <PencilIcon class="size-4" />
      </button>
      <button
        class="hover:bg-red-700 p-2 rounded flex justify-center items-center text-neutral-400 hover:text-white transition-all"
        @click="deleteTask(task.id)"
      >
        <TrashIcon class="size-4" />
      </button>
    </div>
  </div>
</template>
