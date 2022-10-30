<template>
  <ModuleCard
    v-for="mod in moduleList"
    :key="mod.code"
    :title="mod.name"
    :shortDescription="mod.description.long"
    :validTerms="validTerms"
    :prerequisite="mod.prerequisites.string ? mod.prerequisites.string : 'None'"
    :preclusion="mod.prerequisites.string ? mod.prerequisites.string : 'None'"
    :corequisite="mod.prerequisites.string ? mod.prerequisites.string : 'None'"
    :courseLink="mod.link"
    :terms="[
      {
        term: 'AY2223/2',
        assessment: [
          {
            name: 'Class Participation',
            weightage: 0.1,
          },
          {
            name: 'Lab Test 1',
            weightage: 0.1,
          },
          {
            name: 'Lab Test 2',
            weightage: 0.25,
          },
          {
            name: 'Group Project',
            weightage: 0.25,
          },
          {
            name: 'Final Exam',
            weightage: 0.3,
          },
        ],
        exam: {
          start: 1669813200,
          end: 1669820400,
          day: 3,
        },
        recommended: {
          hours: {
            homework: 0.3,
            lesson: 0.3,
            project: 0.4,
            total_weekly: 8,
          },
          year: 1,
        },
      },
    ]"
  />
</template>

<script>
import ModuleCard from "@/components/ModuleCard.vue";
import { returnModuleObject } from "@/utils/firebasemethod";

export default {
  name: "ModuleListView",
  components: { ModuleCard },
  async mounted() {
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
};
</script>
