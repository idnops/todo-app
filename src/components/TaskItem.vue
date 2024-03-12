<script lang="ts" setup>
import { CheckIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const isCompleted = ref(false);
</script>

<template>
  <div
    class="rounded ring-1 ring-slate-500 p-4 text-white flex justify-between"
    :class="[isCompleted ? 'bg-slate-800' : 'bg-slate-600']"
  >
    <div class="flex gap-4">
      <button
        class="size-6 rounded-full ring-1 ring-slate-400 flex items-center justify-center hover:ring-white"
        :class="[isCompleted ? 'bg-white' : '']"
        @click="isCompleted = !isCompleted"
      >
        <CheckIcon
          class="size-4 text-blue-500"
          :class="[isCompleted ? 'text-black' : '']"
        />
      </button>
      <h4 :class="[isCompleted ? 'line-through' : '']">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </h4>
    </div>
  </div>
</template>
