
<template>
  <aside class="w-56 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out"
    :class="{'relative -translate-x-0':showSideBar}" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3  bg-gray-50  h-screen dark:bg-gray-800">
      <div
        class="flex items-center justify-between p-2 tracking-widest text-base font-bold text-gray-900 rounded-lg dark:text-white ">
        <p class="p-[10px]">
          BeforeClass
        </p>
        <Button @click="showSideBar = !showSideBar">
          <img
            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
            src="../../assets/arrowLeft.svg" alt="">
        </Button>
      </div>
      <ul class="space-y-2 p-[10px] mt-[15px]">
        <ListItem list-image="timetable.svg" list-name='Timetable' link-href="#" />
        <ListItem list-image="modules.svg" list-name='Modules' link-href="#" />

        <hr class=" border-gray-200 dark:border-gray-700" />

        <ListItem list-image="settings.svg" list-name='Settings' link-href="#" />
      </ul>
    </div>
  </aside>
  <!-- Page content -->
  <div class="flex-1" :class="{'hidden':showSideBar}">
    <!-- sidebar toggle -->
    <div class="px-2 py-[26px] absolute">
      <Button @click="showSideBar = !showSideBar">
        <img
          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
          src="../../assets/arrowRight.svg" alt="">
      </Button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Button from '../Button/Button.vue'
import ListItem from '../ListItem/ListItem.vue'

export default {
  setup() {
    const showSideBar = ref(true)
    return {
      showSideBar,
    }
  },
  components: {
    "Button": Button,
    "ListItem": ListItem
  }
}
</script>

