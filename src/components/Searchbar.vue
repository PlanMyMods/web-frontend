<template>




    <div class="px-8 pb-3 pt-1 md:px-0 bg-gray-50 dark:bg-gray-800">

        <div class="relative mx-auto">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img class="w-5 h-5" src="/assets/search.svg" alt="" />
            </div>
            <input type="text" v-model="input" id="email-address-icon"
                class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Find Modules">
                <!-- <div class="item searchResult" v-for="searchResult in filteredList()" :key="searchResult">
                    <p>searchResult</p>
                </div>
                <div class="item error" v-if="input&&!filteredList().length">
                    <p>No results found!</p>
                </div> -->
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import SearchInput from 'vue-search-input'
import {returnModuleArray, returnNameArray} from "@/utils/firebasemethod";
let input = ref("");

//declare empty array to fill in all the details
const codeArr = await returnModuleArray();
const nameArr = await returnNameArray();
console.log("Test:" + codeArr)

const searchVal = ref('')

export default {
  components: {
    SearchInput
  },
  setup() {
    return {
      searchVal
    }
  }
}

// export async function filteredList(){
//     return codeArr.filter((searchResult) =>
//         searchResult.toLowerCase().includes(input.value.toLowerCase())
//     );
// }

// export default{
//     data(){
//         return{
//             codeArr: [],
//             nameArr: []
//         };
//     },
//     async created(){
//         this.codeArr = await returnModuleArray();
//         console.log("Test:" + this.codeArr)
//     }
// }

</script>
