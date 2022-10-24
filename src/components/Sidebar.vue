<template>
  <div class="bg-gray-50 dark:bg-gray-800 p-5 relative h-screen min-w-[16rem] duration-300 w-64 hidden md:block"
    :class="{ 'w-20 min-w-[5rem]': showSideBar }">
    <!-- <Button
      @click="showSideBar = !showSideBar"
      class="text-gray-500 absolute rounded-full border border-solid border-gray-200 dark:border-gray-500 dark:bg-gray-800 bg-gray-50 -right-4 top-14 dark:text-gray-400"
      :class="{ 'rotate-180': showSideBar }"
    >
      <img class="w-4 h-4" src="/assets/arrowLeft.svg" alt="" />
    </Button> -->
    <ul class="space-y-2 px-0" :class="{ '': showSideBar }">
      <li>
        <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-center">
          <a href="/">
            <span
              class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap dark:text-white">BeforeClass</span>
          </a>
        </div>
      </li>
      <li>
        <SearchBar />
      </li>
      <li>
        <SidebarListItem linkName="Timetable" linkRoute="/timetable" linkImagePath="/assets/timetable.svg"
          :showSideBar="showSideBar" />
      </li>
      <li>
        <SidebarListItem linkName="Modules" linkRoute="/modules" linkImagePath="/assets/modules.svg"
          :showSideBar="showSideBar" />
      </li>
      <hr class="border-gray-300 dark:border-gray-700" />
      <li>
        <SidebarListItem linkName="Settings" linkRoute="/settings" linkImagePath="/assets/settings.svg"
          :showSideBar="showSideBar" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";
import SidebarListItem from "./SidebarListItem.vue";
import SearchBar from "./SearchBar.vue";

export default {
  setup() {
    const showSideBar = ref(false);
    return { showSideBar };
  },
  components: {
    Button: Button,
    SidebarListItem,
    SearchBar
  },
};
</script>
