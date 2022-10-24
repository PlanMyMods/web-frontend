<template>
  <main class="w-screen flex flex-col fixed">
    <Navbar class="" />
    <div class="flex h-[calc(100vh-4rem)]">
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
import db from './firebase.js';
import {collection, query, where, doc, getDoc, onSnapshot} from "firebase/firestore";
export default {
  name: "App",
  components: {
    Sidebar,
    Navbar,
  },
  mounted(){
  },
  data() {
      return {
        childComponent: 'SampleContent',
      }
    },
  methods: {
    //-----------------------------------------Module Collection-----------------------------------------------
      //get a list of modules like: ['CS101', 'CS102', 'IS216']
      async returnModuleArray(){
        const modules = collection(db, "Modules");
        const q = query(modules, where("code", "!=", ""));
  
        onSnapshot(q, (snapshot) =>{
          let modulelist = [];
          snapshot.docs.forEach((doc) =>{
            modulelist.push(doc.id)
          })
          if (modulelist.length > 0){
            console.log(modulelist)
            return modulelist
          }
          else{
            console.log("No data or query error")
          }
        })
      },
      
      //return every single module into an array of object
      async returnModuleObject(){
        const modules = collection(db, "Modules");
        const q = query(modules, where("code", "!=", ""));
  
        onSnapshot(q, (snapshot) =>{
          let modulelist = [];
          snapshot.docs.forEach((doc) =>{
            modulelist.push({...doc.data()})
          })
          if (modulelist.length > 0){
            console.log(modulelist)
            return modulelist
          }
          else{
            console.log("No data or query error")
          }
        })
      },
  
      //call the full details of each course by course code;
      //returns the object of the whole course
      async getFullCoursebyCode(code){
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
  
      //call the full details of each course by course name;
      //returns the object of the whole course
      async getFullCoursebyName(name){
        const module = collection(db, "Modules");
        const q = query(module, where("name", "==", name));
  
        onSnapshot(q, (snapshot) =>{
          let modulelist = [];
          snapshot.docs.forEach((doc) =>{
            modulelist.push({...doc.data()})
          })
          if (modulelist.length > 0){
            console.log(modulelist[0])
            return(modulelist[0])
          }
          else {
            console.log("Module name incorrect/no such module")
          }
        })
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
  
      //---------------------------------------Professor Collection---------------------------------------------
      
  
  
    } 

};
</script>

<style scoped></style>
