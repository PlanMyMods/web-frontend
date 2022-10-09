
<template>
  <main>
    <!-- navbar goes here -->

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
