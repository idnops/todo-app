<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useTaskStore } from "../stores/task";
import { CheckIcon } from "@heroicons/vue/24/solid";
import { onMounted, ref } from "vue";
import { router } from "../routes";
const { getTask, updateTask } = useTaskStore();

const route = useRoute();
const task = getTask(route.params.id.toString());
const body = ref<string>("");
const isFavorite = ref(false);

onMounted(() => {
  body.value = task!.body;
  isFavorite.value = task!.isFavorite;
});

const handleSubmit = () => {
  updateTask(route.params.id.toString(), body.value, isFavorite.value);
  router.push("/");
};
</script>

<template>
  <div class="bg-slate-900 min-h-screen">
    <div class="container mx-auto">
      <div class="p-4 pt-[100px] mb-32 text-center text-white">
        <h1 class="text-3xl capitalize font-semibold">Edit Task</h1>
      </div>

      <div
        class="flex flex-col gap-8 rounded-xl p-4 ring-slate-700 bg-slate-800 w-full z-10"
      >
        <div class="flex justify-center">
          <h2 class="text-lg text-white">Task: {{ task?.id }}</h2>
        </div>
        <div>
          <input
            type="text"
            class="w-full bg-white p-4 rounded-lg"
            v-model="body"
          />
        </div>

        <div class="flex justify-between">
          <div class="flex items-center gap-4">
            <button
              class="size-6 rounded-lg ring-1 ring-slate-400 flex items-center justify-center hover:ring-white transition-all flex-shrink-0"
              :class="[isFavorite ? 'bg-white' : '']"
              @click="isFavorite = !isFavorite"
            >
              <CheckIcon v-if="isFavorite" class="size-4 text-black" />
            </button>
            <span class="text-sm font-medium text-white">High Priority</span>
          </div>
          <div class="flex gap-2">
            <router-link to="/">
              <button
                class="px-4 py-2 bg-slate-700 hover:bg-slate-600 transition-all text-white rounded-lg uppercase text-xs font-medium"
              >
                cancel
              </button>
            </router-link>
            <button
              @click="handleSubmit"
              class="px-4 py-2 bg-green-700 hover:bg-green-600 transition-all text-white rounded-lg uppercase text-xs font-medium"
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
