<template>
  <div>
    <nav class="bg-gray-50 border-gray-200 px-2 sm:px-4 p-2.5 dark:bg-gray-800 grid grid-cols-3">
      <div class="col-span-1 flex items-center md:hidden">
        <Button class="rounded-lg overflow-hidden" @click="showNavMenu = !showNavMenu">
          <img class="w-8 h-8" src="/assets/hamburger.svg" alt="" />
        </Button>
      </div>

      <div class="col-span-1 flex items-center justify-center">
        <button class="self-center text-2xl tracking-tight font-semibold whitespace-nowrap dark:text-white">
          <TextUrl text="BeforeClass" link="/timetable" :router="true" />
        </button>
      </div>

    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "./Button.vue";
import NavbarButtons from "./NavbarButtons.vue";
import TextUrl from "./TextUrl.vue";

export default {
  setup() {
  },
  components: {
    Button: Button,
    NavbarButtons,
    TextUrl,
  },
};
</script>
