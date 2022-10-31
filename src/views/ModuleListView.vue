<template>
  <ModuleCard
    v-for="mod in moduleList"
    :key="mod.code"
    :validTerms="validTerms"
    :mod="mod"
    :terms="mod.terms"
  />
</template>

<script>
import ModuleCard from "@/components/ModuleCard.vue";
import { returnModuleObject } from "@/utils/firebasemethod";

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
  methods: {
    returnModuleObject,
  },
  components: { ModuleCard },
};
</script>
