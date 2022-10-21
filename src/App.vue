
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
    <button @click="getCoursePrerequisite(course)">Click here</button>
    <button @click="returndb()">Here!</button>
  </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue';
import Button from './components/Button.vue';
import PageContentPlaceholder from './components/PageContentPlaceholder.vue'
import SampleContent from './components/SampleContent.vue';
import db from './firebase.js';
import {collection, query, where, doc, getDoc } from "firebase/firestore";

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
      course: "IS216"
    }
  },
  methods: {
    //Sample code: return everything in each course code
    async returndbSample(){
      const docRef = doc(db, "Modules", "IS101");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },

    //-----------------------------------------Module Collection-----------------------------------------------
    //call the full details of each course by course code;
    //returns the object of the whole course
    async getFullCourse(code){
      const docRef = doc(db, "Modules", code);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    
     //call the course name of each course by course code;
    //returns a string of the course name
    async getCourseName(code){
      const docRef = doc(db, "Modules", code);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().name);
        return docSnap.data().name;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },

    //call the course description of each course by course code;
    //returns an object of the long & short description
    async getCourseDescription(code){
      const docRef = doc(db, "Modules", code);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().description);
        return docSnap.data().description;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },

    //call the course link of each course by course code;
    //returns a string of the link
    async getCourseLink(code){
      const docRef = doc(db, "Modules", code);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().link);
        return docSnap.data().link;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    
    //call the course prerequisite of each course by course code;
    //returns a string of the link
    async getCoursePrerequisite(code){
      const docRef = doc(db, "Modules", code);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().prerequisites);
        return docSnap.data().prerequisites;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },

    //retrieve keys: find out how to query them

    //---------------------------------------Professor Collection---------------------------------------------
    


  } 
}
</script>
<style scoped>

</style>
