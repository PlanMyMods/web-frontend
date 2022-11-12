<template>

  <!-- Step 1: use v-for to loop through the modules and include each one in the dropdown --> 
  <Combobox v-model="selectedModule">
    <ComboboxInput @change="query = $event.target.value" />
    <ComboboxOptions>
      <ComboboxOption v-for="mod in filteredModules" :key="mod" :value="mod">
        {{ mod }}
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>

  <!-- Step 2: Create a button "Add to Timetable" which adds the selected module to Timetable onclick
  Can use AddModule.vue component (to be added) here-->

</template>


<script>
    import { ref } from 'vue'
    import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/vue'
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
        selectedModule: ref(moduleCodeList[0]),
        query: ref(""),
        
      }
    },

    components: { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption },

    computed: {
        filterModules() {
          query.value === ''
          ? moduleCodeList
          : moduleCodeList.filter((mod) => {
        return mod.toLowerCase().includes(query.value.toLowerCase())
        }
          )
    }
  }, 

    
};

</script>