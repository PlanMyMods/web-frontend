<template>


  <div class="flex-col flex">
    <!-- topnav -->
    <div v-show="isMobile">
      <nav class="bg-gray-50 border-gray-200   p-3 dark:bg-gray-800 grid grid-cols-3">
        <div class="col-span-1 pl-3 flex items-center justify-start">
          <button class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap dark:text-white">
            <TextUrl text="BeforeClass" link="/timetable" :router="true" />
          </button>
        </div>
        <div class="col-span-1"></div>
        <div class="col-span-1 flex items-center justify-end md:hidden">
          <Button class="rounded-lg overflow-hidden" @click="showSideBar = !showSideBar">
            <img v-if="!showSideBar" class="w-7 h-7" src="/assets/hamburger.svg" alt="" />
            <img v-else class="w-7 h-7" src="/assets/hamburgerClose.svg" alt="" />
          </Button>

        </div>
      </nav>
    </div>
    <!-- sidenav -->
    <Transition name="sideNav">
      <div v-show="!isMobile || showSideBar"
        class=" bg-gray-50 dark:bg-gray-800 p-3 pb-8 h-screen min-w-[11rem] w-[11rem] flex flex-col justify-between fixed top-0 left-0 z-50 drop-shadow-md shadow-md dark:drop-shadow-2xl dark:shadow-2xl">
        <div>
          <div class="p-2 pb-4 rounded-lg text-center scale-100">
            <button
              class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap text-blue-600 dark:text-blue-400">
              <TextUrl text="BeforeClass" link="/timetable" :router="true" />
            </button>
          </div>
          <ul class="space-y-2 px-0">
            <li>
              <!-- <Searchbar /> -->
            </li>
            <li>
              <SidebarListItem linkName="Timetable" linkRoute="/timetable" linkImagePath="/assets/timetable.svg" />
            </li>
            <li>
              <SidebarListItem linkName="Modules" linkRoute="/modules" linkImagePath="/assets/modules.svg" />
            </li>
            <li>
              <SidebarListItem linkName="Settings" linkRoute="/settings" linkImagePath="/assets/settings.svg" />
            </li>
          </ul>
        </div>
        <div class="flex justify-center gap-1">
          <SidebarListItem :linkImagePath="isDark ? `/assets/sun.svg` : `/assets/moon.svg`" @click="toggleDark()" />
          <SidebarListItem linkRoute="/login" linkImagePath="/assets/person.svg" />
          <a href="https://github.com/SMU-IS216G6T10/smumods-frontend" target="_blank">
            <SidebarListItem linkImagePath="/assets/github.svg" />
          </a>
        </div>
      </div>
    </Transition>
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
  data() {
    return {
      windowWidth: null,
      isMobile: false
    }
  },
  components: {
    Button: Button,
    SidebarListItem,
    Searchbar: SearchBar,
    ThemeToggle,
    TextUrl,
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        this.isMobile = true
        return
      }
      this.isMobile = false
      this.showSideBar = false
      return
    }
  }
};
</script>

<style>
.sideNav-enter-active,
.sideNav-leave-active {
  transition: 0.5s ease all;
}

.sideNav-enter-from,
.sideNav-leave-to {
  transform: translateX(-250px);
}

.sideNav-enter-to {
  transform: translateX(0);
}
</style>