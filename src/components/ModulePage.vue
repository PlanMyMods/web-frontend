<template>
  <div
    class="flex flex-col justify-between space-y-10 lg:space-x-10 max-w-screen-2xl text-black dark:text-gray-300"
  >
    <div>
      <!-- first row -->
      <div class="mx-auto mb-10">
        <!-- <div class="text-3xl font-extrabold py-5"> -->
        <div
          class="text-3xl font-extrabold pt-5 dark:text-blue-300 text-blue-600"
        >
          {{ moduleData.code }}
        </div>
        <div
          class="flex flex-row justify-between text-3xl font-extrabold pt-2 dark:text-gray-300 text-gray-600"
        >
          <div>{{ moduleData.name }}</div>
          <CardActionButton
            class="text-sm"
            text="Add to Timetable"
            textColor="text-gray-700"
            textColorDark="text-gray-300"
            color="bg-gray-200"
            colorDark="bg-gray-700"
            hoverColor="bg-gray-300"
            hoverColorDark="bg-gray-600"
            @click="handleAddModule(moduleData)"
          />
        </div>
        <!-- </div> -->

        <div class="font-light pt-5 text-gray-500 dark:text-gray-400">
          {{ moduleData.description.long }}
        </div>
      </div>
      <hr
        v-if="moduleTerms[0] != null"
        class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"
      />

      <!-- second row -->
      <div
        class="flex flex-col lg:flex-row w-full mx-auto mb-10 lg:justify-between my-10"
        v-if="moduleTerms[0] != null"
      >
        <div
          class="w-full lg:w-[50%] mx-auto lg:mx-0 mb-12 lg:mb-0 flex justify-center lg:justify-start"
        >
          <ModuleCardTerms :terms="moduleTerms" :courseLink="moduleData.link" />
        </div>
        <div
          class="w-full lg:w-[50%] flex justify-center lg:justify-end items-center"
        >
          <div class="w-[300px]">
            <DoughnutChart
              :assessmentName="assignments[0]"
              :weightage="assignments[1]"
            />
          </div>
        </div>
      </div>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <!-- pre-req tree -->
      <div class="my-10">
        <PrerequisiteTree
          :prerequisites="prerequisites"
          :moduleName="moduleData.code"
          :isOr="isOr"
        />
      </div>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <!-- timetable component -->
      <h1
        class="text-3xl text-center lg:text-left font-extrabold dark:text-gray-300 py-5 mb-10 text-gray-600"
      >
        Timetable
      </h1>
      <div class="w-full overflow-x-auto">
        <Timetable></Timetable>
      </div>
    </div>
  </div>
</template>

<script>
// import ModulePage from '@/components/ModulePage.vue';
import ModuleCardPrerequisite from "@/components/ModuleCardPrerequisite.vue";
import ModuleCardTerms from "@/components/ModuleCardTerms.vue";
import PrerequisiteTree from "@/components/PrerequisiteTree.vue";
import { getFullCoursebyCode } from "@/utils/firebase";
import DoughnutChart from "./DoughnutChart.vue";
import Timetable from "./Timetable.vue";
import { useRoute } from "vue-router";
import CardActionButton from "./CardActionButton.vue";
import { useStore } from "vuex";

export default {
  async setup() {
    const route = useRoute();
    const store = useStore();
    const moduleCode = route.params.id;
    const moduleData = await getFullCoursebyCode(moduleCode);
    const moduleTerms = moduleData.terms;
    console.log("moduleData pre-req:", moduleData);
    console.log("moduleTerms:", moduleTerms[0]);

    function mapAssessmentArray(term) {
      let arr = [];
      let nameArr = [];
      let weightageArr = [];
      term.assessment.map((e) => {
        console.log("terms", e);
        nameArr.push(e.name);
        weightageArr.push(e.weightage);
      });
      arr.push(nameArr, weightageArr);
      console.log("assArr:", arr);
      return arr;
    }

    function mapPrerequisiteArray(prerequisites) {
      let arr = [];
      prerequisites.ref.map((e) => {
        arr.push(e.id);
      });
      if (arr === []) {
        arr.push("None");
      }
      return arr;
    }
    let assignments = null;
    if (moduleTerms[0] != null) {
      assignments = mapAssessmentArray(moduleTerms[0]);
    }

    const prerequisites = mapPrerequisiteArray(moduleData.prerequisites);
    console.log("assignments", assignments);
    console.log("prerequisites", prerequisites);

    return {
      store,
      moduleData,
      moduleTerms,
      assignments,
      prerequisites,
    };
  },
  methods: {
    validTerm(terms) {
      return terms.length > 0;
    },
    handleAddModule(mod) {
      console.log("handleAddModule");
      this.store.dispatch("addToUserTimetable", {
        moduleCode: mod.code,
        sectionCode: "AY2223T1G1",
      });
    },
  },
  computed: {
    isOr() {
      if (this.moduleData.prerequisites.string.includes("or")) {
        return true;
      }
      return false;
    },
  },
  components: {
    ModuleCardPrerequisite,
    ModuleCardTerms,
    PrerequisiteTree,
    DoughnutChart,
    Timetable,
    CardActionButton,
  },
};
</script>
