<template>
  <div class="flex">
    <button v-for="term in validTerms" :key="term" @click="updateSelectedTerm(term)"
      class="px-3 pb-2 border-b w-[5rem] font-medium text-[#6B7280;]" :class="{
        'border-b-2 dark:border-b-blue-300 border-b-blue-600 dark:text-blue-300 text-blue-600':
          isTermSelected(term),
        'dark:text-gray-500 text-gray-400': !isTermValid(term),
      }" :disabled="!isTermValid(term)">
      Term {{ term }}
    </button>
  </div>
  <div class="mt-5 space-y-3 dark:text-gray-300">
    <div v-if="hasProperty(terms[selectedIndex].exam)">
      <div class="font-bold mb-2 ">Exams:</div>
      <div class="">
        {{ formatUnixTime(terms[selectedIndex].exam.start, "dd-MMM-yyyy") }} •
        {{
            getTimeDifference(
              terms[selectedIndex].exam.start,
              terms[selectedIndex].exam.end
            )
        }}
        hrs
      </div>
    </div>
    <div v-if="hasProperty(terms[selectedIndex].assessment)">
      <div class="font-bold mb-2 ">Course Assessment:</div>
      <div v-for="(assessment, index) in assessments" :key="index" class=" flex items-center space-x-2">
        <div class="w-32">{{ assessment.name }}</div>
        <div class="w-8">{{ assessment.weightage * 100 }}%</div>
        <div class="hidden xs:flex space-x-0.5">
          <div v-for="(_, index) in Array(Math.floor(assessment.weightage * 10))" :key="index"
            class="h-2.5 w-6 rounded-sm dark:bg-blue-100 bg-blue-400"></div>
          <div v-if="(assessment.weightage * 100) % 10 !== 0"
            class="h-2.5 w-3 rounded-l-sm dark:bg-blue-100 bg-blue-400"></div>
        </div>
      </div>
    </div>
    <div v-if="hasProperty(terms[selectedIndex].recommended)">
      <div class="font-bold mb-2 ">Estimated Weekly Hours:</div>
      <div class="">{{ terms[selectedIndex].recommended.hours.total }} hrs</div>
    </div>
    <div class="">
      <a class="dark:text-blue-300 text-blue-600" :href="courseLink" target="_blank">Course
        Outline</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { formatUnixTime, getTimeDifference } from "@/utils/datetime";

export default {
  name: "ModuleCardTerms",
  setup() {
    let selectedIndex = ref(0);
    return { selectedIndex };
  },
  props: {
    terms: Array,
    validTerms: Array,
    courseLink: String,
  },
  methods: {
    formatUnixTime,
    getTimeDifference,
    updateSelectedTerm(term) {
      this.selectedIndex = this.terms
        .map((item) => item.term.split("/")[1])
        .indexOf(term);
    },
    isTermValid(term) {
      // check if `term` exists in this.terms
      return this.terms.some((item) => item.term.split("/")[1] === term);
    },
    isTermSelected(term) {
      return term === this.terms[this.selectedIndex].term.split("/")[1];
    },
    hasProperty(property) {
      return property !== undefined || property !== null;
    },
  },
  computed: {
    assessments() {
      const assessments = this.terms[this.selectedIndex].assessment;
      // sorts by assessment name in ascending order
      assessments.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      return assessments;
    },
  },
};
</script>
