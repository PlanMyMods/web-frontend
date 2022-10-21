<template>
  <main class="w-screen flex flex-col fixed">
    <!-- navbar goes here -->

    <Navbar class="" />
    <div class="flex h-[calc(100vh-4rem)]">
      <Sidebar />
      <div class="flex-auto dark:bg-gray-900 bg-grey-2 overflow-y-scroll">
        <div class="items-center mx-auto max-w-screen-2xl p-10 space-y-5">
          <ModuleCard
            title="IS446 Managing Customer Relations with Analytics: Asian Insights"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            :valid_terms="['1', '2', '3A', '3B']"
            :terms="[
              {
                term: 'AY2223/2',
                assessment: [
                  {
                    name: 'Class Participation',
                    weightage: 0.1,
                  },
                  {
                    name: 'Lab Test 1',
                    weightage: 0.1,
                  },
                  {
                    name: 'Lab Test 2',
                    weightage: 0.25,
                  },
                  {
                    name: 'Group Project',
                    weightage: 0.25,
                  },
                  {
                    name: 'Final Exam',
                    weightage: 0.3,
                  },
                ],
                exam: {
                  start: 1669813200,
                  end: 1669820400,
                  day: 3,
                },
                recommended: {
                  hours: {
                    homework: 0.3,
                    lesson: 0.3,
                    project: 0.4,
                    total_weekly: 8,
                  },
                  year: 1,
                },
              },
            ]"
            course-link="https://smu.sg/cdd-is112"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
          /><ModuleCard
            title="IS446 Managing Customer Relations with Analytics: Asian Insights"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            :valid_terms="['1', '2', '3A', '3B']"
            :terms="[
              {
                term: 'AY2223/2',
                assessment: [
                  {
                    name: 'Class Participation',
                    weightage: 0.1,
                  },
                  {
                    name: 'Lab Test 1',
                    weightage: 0.1,
                  },
                  {
                    name: 'Lab Test 2',
                    weightage: 0.25,
                  },
                  {
                    name: 'Group Project',
                    weightage: 0.25,
                  },
                  {
                    name: 'Final Exam',
                    weightage: 0.3,
                  },
                ],
                exam: {
                  start: 1669813200,
                  end: 1669820400,
                  day: 3,
                },
                recommended: {
                  hours: {
                    homework: 0.3,
                    lesson: 0.3,
                    project: 0.4,
                    total_weekly: 8,
                  },
                  year: 1,
                },
              },
            ]"
            course-link="https://smu.sg/cdd-is112"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
          /><ModuleCard
            title="IS446 Managing Customer Relations with Analytics: Asian Insights"
            short-description="some short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short textsome short text"
            preclusion="CS101"
            prerequisite="CS101"
            corequisite="CS101"
            :valid_terms="['1', '2', '3A', '3B']"
            :terms="[
              {
                term: 'AY2223/2',
                assessment: [
                  {
                    name: 'Class Participation',
                    weightage: 0.1,
                  },
                  {
                    name: 'Lab Test 1',
                    weightage: 0.1,
                  },
                  {
                    name: 'Lab Test 2',
                    weightage: 0.25,
                  },
                  {
                    name: 'Group Project',
                    weightage: 0.25,
                  },
                  {
                    name: 'Final Exam',
                    weightage: 0.3,
                  },
                ],
                exam: {
                  start: 1669813200,
                  end: 1669820400,
                  day: 3,
                },
                recommended: {
                  hours: {
                    homework: 0.3,
                    lesson: 0.3,
                    project: 0.4,
                    total_weekly: 8,
                  },
                  year: 1,
                },
              },
            ]"
            course-link="https://smu.sg/cdd-is112"
            :badges="[
              { imagePath: '/assets/projects.svg', name: 'Year 1' },
              { imagePath: '/assets/projects.svg', name: 'Projects' },
            ]"
          />
        </div>
      </div>
    </div>
    <!-- This is for testing only! -->
    <button @click="getCoursePrerequisite(course)">Click here</button>
    <button @click="returndb()">Here!</button>
  </main>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Button from "./components/Button.vue";
import PageContentPlaceholder from "./components/PageContentPlaceholder.vue";
import SampleContent from "./components/SampleContent.vue";
import ModuleCard from "./components/ModuleCard.vue";
import db from './firebase.js';
import {collection, query, where, doc, getDoc } from "firebase/firestore";

export default {
  name: " App",
  components: {
    Button,
    Sidebar,
    PageContentPlaceholder,
    SampleContent,
    Navbar,
    ModuleCard,
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
<style scoped></style>
