<template>




    <div class="px-8 pb-3 pt-1 md:px-0 bg-gray-50 dark:bg-gray-800">

        <div class="relative mx-auto">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img class="w-5 h-5" src="/assets/search.svg" alt="" />
            </div>
            <input type="text" v-model="search" id="email-address-icon"
                class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Find Modules">
            <div>
              <!-- To test whether the search is working, delete when done -->
              {{filteredModules}}
            </div> 
        </div>
    </div>
</template>

<script>
import {returnModuleArray, returnNameArray, returnCodeNameObject, returnModuleObject} from "@/utils/firebasemethod";


export default {
  async created(){
    const codeArr = await returnModuleArray();
    //the returnCodeNameObject() is newly created getter to have the string concactenated. Will probably not be using for final version but this array of object works
    const newObj = await returnCodeNameObject();
    //the returnModuleObject() is used in the ModuleListView page
    this.modules = await returnModuleObject();
  },
  data(){
    return{
      modules:[],
      search:""
    };
  },

  computed: {
    createArr(){
      //this is for testing whether the right array/object is passed delete when necessary
      console.log("Test:" + this.modules)
    },

    //this filter works by putting through the .filter, for every item that the match never catch, it will be dropped
    filteredModules: function(){
      return this.modules.filter(mod => {
        return mod.name.match(this.search.toLowerCase());        
      });
    }
  },
}
</script>
