
<template>
  <main>
    <!-- navbar goes here -->

    <Navbar />
    <div class="flex overscroll-contain">
      <Sidebar />
      <PageContentPlaceholder>

        <Placeholder />
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
import Placeholder from './components/Placeholder.vue';
export default {
  name: ' App',
  components: {
    Button,
    Sidebar,
    PageContentPlaceholder,
    SampleContent,
    Placeholder,
    Navbar,
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
