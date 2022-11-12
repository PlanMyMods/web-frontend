<template>
  <ModuleCard
    v-for="mod in moduleList"
    :key="mod.code"
    :validTerms="validTerms"
    :mod="mod"
    :terms="mod.terms"
    :linkRoute="'module/' + mod.code"
  />
</template>

<script>
import ModuleCard from "@/components/ModuleCard.vue";
import { returnModuleObject } from "@/utils/firebase";

export default {
  name: "ModuleListView",
  async created() {
    this.moduleList = await returnModuleObject();
  },
  data() {
    return {
      validTerms: ["1", "2", "3A", "3B"],
      moduleList: [],
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
  },
  methods: {
    returnModuleObject,
  },
  components: { ModuleCard },
};
</script>
