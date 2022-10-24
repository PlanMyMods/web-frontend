<template>
  <div>
    <nav class="bg-gray-50 border-gray-200 px-2 sm:px-4 p-2.5 dark:bg-gray-800 grid grid-cols-3 md:hidden">
      <div class="col-span-1 flex items-center md:hidden">
        <Button class="rounded-lg overflow-hidden" @click="showNavMenu = !showNavMenu">
          <img class="w-8 h-8" src="/assets/hamburger.svg" alt="" />
        </Button>
      </div>

      <div class="col-span-1 flex items-center justify-center">
        <router-link to="/timetable">
          <span
            class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap dark:text-white">BeforeClass</span>
        </router-link>
      </div>
      <div class="flex justify-end items-center pr-2">
        <Button class="rounded-lg overflow-hidden" @click="showSearchBar = !showSearchBar">
          <img class="w-8 h-8" src="/assets/search.svg" alt="" />
        </Button>
      </div>
    </nav>
    <!-- nav menu -->
    <div class="py-2.5 px-5 w-full md:hidden md:w-auto bg-gray-50 dark:bg-gray-800"
      :class="{ hidden: showNavMenu === false }">
      <ul
        class="flex flex-col p-4 bg-gray-50 rounded-lg border border-gray-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavbarButtons linkRoute="/timetable" linkName="Timetable" />
        </li>
        <li>
          <NavbarButtons linkRoute="/modules" linkName="Modules" />
        </li>
        <li>
          <NavbarButtons linkRoute="/settings" linkName="Settings" />
        </li>
      </ul>
    </div>
    <!-- search bar -->
    <Searchbar :class="{ hidden: showSearchBar === false }" />
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";
import NavbarButtons from "./NavbarButtons.vue";
import Searchbar from "./SearchBar.vue";

export default {
  setup() {
    const showNavMenu = ref(false);
    const showSearchBar = ref(false);
    return { showNavMenu, showSearchBar };
  },
  components: {
    Button: Button,
    NavbarButtons,
    Searchbar
  },
  methods: {
    handleClick: function () {
      showNavMenu = !showNavMenu;
      console.log(showNavMenu);
    },
  },
};
</script>
