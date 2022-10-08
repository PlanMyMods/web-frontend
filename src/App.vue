
<template>
  <main>
    <Sidebar />
    <!-- Navbar component goes here -->
    <PageContentPlaceholder>
      <component :is="childComponent"></component>
      <component :is="childComponent"></component>
      <component :is="childComponent"></component>
      <component :is="childComponent"></component>
    </PageContentPlaceholder>
  </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Button from './components/Button.vue';
import PageContentPlaceholder from './components/PageContentPlaceholder.vue'
import SampleContent from './components/SampleContent.vue';
export default {
  name: ' App',
  components: {
    Button,
    Sidebar,
    PageContentPlaceholder,
    SampleContent
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
