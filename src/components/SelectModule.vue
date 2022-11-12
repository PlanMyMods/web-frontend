<template>

  <!-- Step 1: use v-for to loop through the modules and include each one in the dropdown --> 
  <div class = "dark:text-white">
    <select id = "chooseMods" onchange = GetSelectedMod(this)>
       <option v-for="mod of moduleCodeList">
            {{mod}}
       </option>
    </select>
  </div>

  <!-- Step 2: Create a button "Add to Timetable" which adds the selected module to Timetable onclick
  Can use AddModule.vue component (to be added) here-->

</template>


<script>
    /* 
    OVERVIEW: 
    - Showcase a dropdown box displaying the modules 
    - user can select, and press a button "Add to Calendar" if they want to display on calendar. 
    */


    // import returnModuleArray to get the Codes for each module. These will be included in the dropdown
    import { returnModuleArray } from "@/utils/firebase";
    import Button from "@/components/Button.vue";


    // export to allow AddModule to import this later
    export default {
    name: "SelectModule",

    async created() {
      this.moduleCodeList = await returnModuleArray();
  },
    data (){
      return {
        moduleCodeList: []
      }
    },

    methods: {
        GetSelectedMod(chooseMods){
          
        }
    },

    components: { Button }
};

    



</script>