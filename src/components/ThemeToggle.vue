<template>
  <li>
    <label
      for="default-toggle"
      class="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        value=""
        id="default-toggle"
        class="sr-only peer"
        @change="toggleDark()"
      />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
      <span
        class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        v-if="isDark"
        >Light Mode</span
      >
      <span
        class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        v-else
        >Dark Mode</span
      >
    </label>
  </li>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
