<template>

  <!-- Step 1: use v-for to loop through the modules and include each one in the dropdown --> 
  <div class = "bg-gray-50 dark:bg-gray-800">
    <select v-model="selectedModule" onkeyup="filterModules()">
      <option v-for="mod in filterModules" :key="mod" :value="mod">
        {{ mod }}
      </option>
    </select>
  </div>

  

  <!-- Step 2: Create a button "Add to Timetable" which adds the selected module to Timetable onclick
  Can use AddModule.vue component (to be added) here-->

</template>


<script>
    // import returnModuleArray to get the Codes for each module. These will be included in the dropdown
    import { returnModuleArray } from "@/utils/firebase";


   

    // export to allow AddModule to import this later
    export default {
    name: "SelectModule",


    
    async created() {
      this.moduleCodeList = await returnModuleArray();
    },


    data (){
      return {
        moduleCodeList: [], 
        selectedModule: "",
        query: "",
        
      }
    },

    computed: {
        filterModules() {
          return this.query === ''
          ? this.moduleCodeList
          : this.moduleCodeList.filter((mod) => {
        return mod.toLowerCase().includes(this.query.toLowerCase())
        }
        )
    }
  }, 

    
};

</script>

<style>



</style>
