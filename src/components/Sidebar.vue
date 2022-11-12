<template>
  <div>
    <div
      class="bg-gray-50 dark:bg-gray-800 p-5 pb-8 h-screen min-w-[12rem] w-[12rem] hidden md:flex md:flex-col md:justify-between"
      :class="{ 'w-20 min-w-[5rem]': showSideBar }"
    >
      <div>
        <div class="p-2 pb-4 rounded-lg text-center">
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
            />
          </li>
          <li>
            <SidebarListItem
              linkName="Modules"
              linkRoute="/modules"
              linkImagePath="/assets/modules.svg"
            />
          </li>
          <li>
            <SidebarListItem
              linkName="Settings"
              linkRoute="/settings"
              linkImagePath="/assets/settings.svg"
            />
          </li>
        </ul>
      </div>
      <div class="flex justify-center gap-1">
        <SidebarListItem
          :linkImagePath="isDark ? `/assets/sun.svg` : `/assets/moon.svg`"
          @click="toggleDark()"
        />
        <SidebarListItem
          linkRoute="/login"
          linkImagePath="/assets/person.svg"
        />
        <a
          href="https://github.com/SMU-IS216G6T10/smumods-frontend"
          target="_blank"
        >
          <SidebarListItem linkImagePath="/assets/github.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";
import Button from "@/components/Button.vue";
import SidebarListItem from "@/components/SidebarListItem.vue";
import SearchBar from "@/components/Searchbar.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import TextUrl from "@/components/TextUrl.vue";

export default {
  setup() {
    const showSideBar = ref(false);

    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return {
      showSideBar,
      isDark,
      toggleDark,
    };
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
