
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
    <!-- This is for testing only! -->
    <button @click="returndb()">Click here</button>
  </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue';
import Button from './components/Button.vue';
import PageContentPlaceholder from './components/PageContentPlaceholder.vue'
import SampleContent from './components/SampleContent.vue';
import db from './firebase.js';
import { doc, getDoc } from "firebase/firestore";

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
  },
  methods: {
    async returndb(){
      const docRef = doc(db, "Modules", "CS101");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

  } 
}
</script>
<style scoped>

</style>
