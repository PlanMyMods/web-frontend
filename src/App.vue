<template>
  <main class="w-screen flex flex-col fixed">
    <Navbar class="" />
    <!-- <div class="flex h-[calc(100vh-4rem)]"> -->
    <div class="flex h-screen">
      <Sidebar />
      <div class="flex-auto dark:bg-gray-900 bg-grey-2 overflow-y-scroll">
        <div class="items-center mx-auto max-w-screen-2xl p-10 space-y-5">
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
