<template>
  <div class="py-5 md:px-0 bg-gray-200 dark:bg-gray-900 sticky top-0">
    <div class="relative mx-auto">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <img class="w-5 h-5" src="/assets/search.svg" alt="" />
      </div>
      <input type="text"
        class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Find Modules" v-model='search' />
    </div>
  </div>
  <ModuleCard v-for="mod in filteredMods" :key="mod.code" :validTerms="validTerms" :mod="mod" :terms="mod.terms"
    :linkRoute="'modules/' + mod.code" />
</template>

<script>
import ModuleCard from "@/components/ModuleCard.vue";
import { returnModuleObject } from "@/utils/firebase";

export default {
  name: "ModuleListView",
  async setup() {
    const moduleList = await returnModuleObject();
    return {
      moduleList,
    };
  },
  data() {
    return {
      validTerms: ["1", "2", "3A", "3B"],
      search: ''
    };
  },
  computed: {
    orderedModuleList() {
      return this.moduleList.sort((a, b) => {
        if (a.code < b.code) {
          return -1;
        }
        if (a.code > b.code) {
          return 1;
        }
        return 0;
      });
    },
    filteredMods() {
      return this.moduleList.filter(mod => mod.name.toLowerCase().includes(this.search.toLowerCase()) || mod.code.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  components: { ModuleCard },
};
</script>
