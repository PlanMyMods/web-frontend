<template>
  <div>
    <div
      class="bg-gray-50 dark:bg-gray-800 p-5 h-screen min-w-[12rem] duration-300 w-[12rem] hidden md:block"
      :class="{ 'w-20 min-w-[5rem]': showSideBar }"
    >
      <div
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-center"
      >
        <button
          class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap text-blue-600 dark:text-blue-400"
        >
          <TextUrl text="BeforeClass" link="/timetable" :router="true" />
        </button>
      </div>
      <ul class="space-y-2 px-0" :class="{ '': showSideBar }">
        <li>
          <Searchbar />
        </li>
        <li>
          <SidebarListItem
            linkName="Timetable"
            linkRoute="/timetable"
            linkImagePath="/assets/timetable.svg"
            :showSideBar="showSideBar"
          />
        </li>
        <li>
          <SidebarListItem
            linkName="Modules"
            linkRoute="/modules"
            linkImagePath="/assets/modules.svg"
            :showSideBar="showSideBar"
          />
        </li>
        <hr class="border-gray-300 dark:border-gray-700" />
        <li>
          <SidebarListItem
            linkName="Settings"
            linkRoute="/settings"
            linkImagePath="/assets/settings.svg"
            :showSideBar="showSideBar"
          />
        </li>

        <hr class="border-gray-300 dark:border-gray-700" />

        <ThemeToggle></ThemeToggle>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";
import SidebarListItem from "./SidebarListItem.vue";
import SearchBar from "./Searchbar.vue";
import ThemeToggle from "./ThemeToggle.vue";
import TextUrl from "./TextUrl.vue";

export default {
  setup() {
    const showSideBar = ref(false);

    return { showSideBar };
  },
  components: {
    Button: Button,
    SidebarListItem,
    Searchbar: SearchBar,
    ThemeToggle,
    TextUrl,
  },
};
</script>
