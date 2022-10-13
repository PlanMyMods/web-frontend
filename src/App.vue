
<template>
  <main>
    <!-- navbar goes here -->

    <Navbar />
    <div class="flex overscroll-contain">
      <Sidebar />
      <PageContentPlaceholder>
        <component :is="childComponent"></component>
        <component :is="childComponent"></component>
        <component :is="childComponent"></component>
        <component :is="childComponent"></component>
      </PageContentPlaceholder>
    </div>

  </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue';
import Button from './components/Button.vue';
import PageContentPlaceholder from './components/PageContentPlaceholder.vue'
import SampleContent from './components/SampleContent.vue';
export default {
  name: ' App',
  components: {
    Button,
    Sidebar,
    PageContentPlaceholder,
    SampleContent,
    Navbar
  },
  data() {
    return {
      childComponent: 'SampleContent',
    }
  }
}
</script>
<style scoped>

</style>
