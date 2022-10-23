<template>
  <div
    class="bg-gray-50 dark:bg-gray-800 p-5 relative h-screen min-w-[14rem] duration-300 w-56 hidden md:block"
    :class="{ 'w-20 min-w-[5rem]': showSideBar }"
  >
    <Button
      @click="showSideBar = !showSideBar"
      class="text-gray-500 absolute rounded-full border border-solid border-gray-200 dark:border-gray-500 dark:bg-gray-800 bg-gray-50 -right-4 top-14 dark:text-gray-400"
      :class="{ 'rotate-180': showSideBar }"
    >
      <img class="w-4 h-4" src="/assets/arrowLeft.svg" alt="" />
    </Button>
    <ul class="space-y-2 p-[10px]" :class="{ 'px-0': showSideBar }">
      <li>
        <router-link to="/">
          <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <div
              class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white"
            >
              <img
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400"
                src="/assets/timetable.svg"
              />
              <span class="ml-3" :class="{ hidden: showSideBar }"
                >Timetable</span
              >
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/modules">
          <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <div
              class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white"
            >
              <img
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400"
                src="/assets/modules.svg"
              />
              <span class="ml-3" :class="{ hidden: showSideBar }">Modules</span>
            </div>
          </div>
        </router-link>
      </li>
      <hr class="border-gray-300 dark:border-gray-700" />
      <li>
        <router-link to="/settings">
          <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <div
              class="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white"
            >
              <img
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400"
                src="/assets/settings.svg"
              />
              <span class="ml-3" :class="{ hidden: showSideBar }"
                >Settings</span
              >
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";

export default {
  setup() {
    const showSideBar = ref(true);
    return { showSideBar };
  },
  components: {
    Button: Button,
  },
};
</script>
