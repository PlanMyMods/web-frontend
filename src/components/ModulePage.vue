<template>
  <div
    class="dark:bg-gray-900 md:px-8 md:py-8 lg:px-16 lg:py-9 rounded-2xl flex flex-col justify-between space-y-10 lg:space-x-10 max-w-screen-2xl text-black dark:text-gray-300"
  >
    <div>
      <!-- first row -->
      <div class="mx-auto mb-10">
        <h1
          class="text-3xl font-extrabold dark:text-blue-300 py-5 text-blue-600"
        >
          {{ moduleData.code }} {{ moduleData.name }}
        </h1>
        <p class="font-light text-gray-500 dark:text-gray-400">
          {{ moduleData.description.long }}
        </p>
      </div>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <!-- second row -->
      <div
        class="flex flex-col lg:flex-row w-full mx-auto mb-10 lg:justify-between my-10"
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
            <DoughnutChart :assessmentName="assArr[0]" :weightage="assArr[1]" />
          </div>
        </div>
      </div>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <!-- pre-req tree -->
      <div class="my-10">
        <PrerequisiteTree
          :prerequisites="prereqArr"
          :moduleName="moduleData.code"
          :isOr="isOr"
        />
      </div>
      <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <!-- timetable component -->
      <h1 class="text-3xl font-extrabold dark:text-gray-300 py-5 text-gray-600">
        Timetable
      </h1>
      <div class="w-full overflow-x-auto mb-20">
        <Timetable></Timetable>
      </div>
    </div>
  </div>
</template>

<script>
// import ModulePage from '@/components/ModulePage.vue';
import { getFullCoursebyCode, getModuleTerms } from "@/utils/firebase";
import ModuleCardPrerequisite from "@/components/ModuleCardPrerequisite.vue";
import ModuleCardTerms from "@/components/ModuleCardTerms.vue";
import PrerequisiteTree from "@/components/PrerequisiteTree.vue";
import DoughnutChart from "./DoughnutChart.vue";
import Timetable from "./Timetable.vue";

export default {
  async created() {
    // this.moduleData = await getFullCoursebyCode('CS203')
    // this.moduleTerms = await getModuleTerms('IS215')
    this.moduleData = await getFullCoursebyCode(this.$route.params.id);
    this.moduleTerms = await getModuleTerms(this.$route.params.id);
    console.log("moduleData pre-req:", this.moduleData.prerequisites);
    console.log("moduleTerms:", this.moduleTerms[0].assessment);
    // console.log(this.$route.params.id)
  },

  methods: {
    validTerm(terms) {
      return terms.length > 0;
    },
  },
  computed: {
    prereqArr() {
      let arr = [];
      this.moduleData.prerequisites.ref.map((e) => {
        arr.push(e.id);
      });
      if (arr === []) {
        arr.push("None");
      }
      return arr;
    },
    isOr() {
      if (this.moduleData.prerequisites.string.includes("or")) {
        return true;
      }
      return false;
    },
    assArr() {
      let arr = [];
      let nameArr = [];
      let weightageArr = [];
      this.moduleTerms[0].assessment.map((e) => {
        console.log("terms", e);
        nameArr.push(e.name);
        weightageArr.push(e.weightage);
      });
      arr.push(nameArr, weightageArr);
      console.log("assArr:", arr);
      return arr;
    },
  },
  data() {
    return {
      moduleData: [],
      moduleTerms: [],

      //TODO: this needs to be dynamically updated for each module
      // assessmentArr: ['Class Participation', 'Exams', 'Project', 'Quizzes'],
      // weightageArr: [10, 35, 35, 20],
    };
  },
  components: {
    ModuleCardPrerequisite,
    ModuleCardTerms,
    PrerequisiteTree,
    DoughnutChart,
    Timetable,
  },
};
</script>
