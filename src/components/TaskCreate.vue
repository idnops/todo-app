<script lang="ts" setup>
import { PlusCircleIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import { useTaskStore } from "../stores/task";

const content = ref<string>("");

const { addTask } = useTaskStore();

const handleSubmit = () => {
  addTask(content.value);
  content.value = "";
};
</script>

<template>
  <div class="fixed bottom-0 w-full z-20 bg-slate-900 p-4 pb-8">
    <div class="container mx-auto">
      <form @submit.prevent="handleSubmit" class="flex gap-4">
        <input
          type="text"
          class="bg-white rounded-xl w-full px-4"
          placeholder="What you need to do?"
          v-model="content"
        />
        <button
          class="flex-shrink-0 p-4 bg-slate-800 rounded-xl text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          :class="[content ? 'hover:bg-slate-700' : '']"
          type="submit"
          :disabled="!content"
        >
          <PlusCircleIcon class="size-8" />
        </button>
      </form>
    </div>
  </div>
</template>
