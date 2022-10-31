<template>
  <Suspense>
    <ModuleCard
      v-for="mod in moduleList"
      :key="mod.code"
      :validTerms="validTerms"
      :mod="mod"
    />
  </Suspense>
</template>

<script>
import { ref } from "vue";
import ModuleCard from "@/components/ModuleCard.vue";
import { returnModuleObject } from "@/utils/firebasemethod";

export default {
  name: "ModuleListView",
  components: { ModuleCard },
  async setup() {
    const moduleList = ref([]);
    moduleList.value = await returnModuleObject();
    return { moduleList };
  },
  data() {
    return {
      validTerms: ["1", "2", "3A", "3B"],
    };
  },
  methods: {
    returnModuleObject,
  },
};
</script>
