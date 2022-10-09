
<template>
  <main>
    <Navbar />
    <Sidebar />
  </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
export default {
  name: ' App',
  components: {
    Sidebar, 
    Navbar
  }
}
</script>

<style scoped>

</style>
