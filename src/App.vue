<template>
  <main class="w-screen flex flex-col fixed text-black dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
    <!-- <Navbar class="md:hidden" /> -->
    <!-- <div class="flex h-[calc(100vh-4rem)]"> -->
    <div class="flex flex-col md:flex-row">
      <Sidebar />
      <div
        class="flex-auto w-full md:ml-[11rem] md:w-[calc(100vh-11rem)] h-[calc(100vh)] md:h-screen dark:bg-gray-900 bg-gray-200 overflow-y-scroll">
        <div class="items-center mx-auto max-w-screen-2xl p-4 sm:p-8 lg:p-10 space-y-5">
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

<style scoped>

</style>
