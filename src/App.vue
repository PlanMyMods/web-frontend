<template>
  <main
    class="w-screen flex flex-col fixed text-black dark:text-gray-300 bg-gray-200 dark:bg-gray-900"
  >
    <!-- <Navbar class="md:hidden" /> -->
    <div class="flex flex-col md:flex-row">
      <Sidebar />
      <div
        class="flex-auto w-full md:w-[calc(100vh-12rem)] h-[calc(100vh-4rem)] md:h-screen overflow-y-scroll"
      >
        <div
          class="items-center mx-auto max-w-screen-2xl p-4 sm:p-8 lg:p-10 space-y-5"
        >
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",

  components: {
    Sidebar,
    Navbar,
  },
};
</script>
