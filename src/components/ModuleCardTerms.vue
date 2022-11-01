<template>
  <div class="flex text-black dark:text-gray-300">
    <button
      v-for="term in validTerms"
      :key="term"
      @click="updateSelectedTerm(term)"
      class="px-3 pb-2 border-b w-[5rem] font-medium text-[#6B7280;]"
      :class="{
        'border-b-2 dark:border-b-blue-300 border-b-blue-600 dark:text-blue-300 text-blue-600':
          isTermSelected(term),
        'dark:text-gray-500 text-gray-700': !isTermValid(term),
      }"
      :disabled="!isTermValid(term)"
    >
      Term {{ term }}
    </button>
  </div>
  <div class="mt-5 space-y-3 dark:text-gray-300">
    <div v-if="hasProperty(terms[selectedIndex].exam)">
      <div class="font-bold mb-2">Exams:</div>
      <div>
        {{ format(terms[selectedIndex].exam.start, "dd-MMM-yyyy") }} •
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
      <div class="font-bold mb-2">Course Assessment:</div>
      <div
        v-for="(assessment, index) in terms[selectedIndex].assessment"
        :key="index"
        class="flex items-center space-x-2"
      >
        <div class="w-32">{{ assessment.name }}</div>
        <div class="w-8">{{ assessment.weightage * 100 }}%</div>
        <div class="hidden xs:flex space-x-0.5">
          <div
            v-for="(_, index) in Array(Math.floor(assessment.weightage * 10))"
            :key="index"
            class="h-2.5 w-6 rounded-sm dark:bg-blue-100 bg-blue-400"
          ></div>
          <div
            v-if="(assessment.weightage * 100) % 10 !== 0"
            class="h-2.5 w-3 rounded-l-sm dark:bg-blue-10 bg-blue-400"
          ></div>
        </div>
      </div>
    </div>
    <div v-if="hasProperty(terms[selectedIndex].recommended)">
      <div class="font-bold mb-2">Estimated Hours:</div>
      <div>{{ terms[selectedIndex].recommended.hours.total_weekly }} hrs</div>
    </div>
    <div>
      <a
        class="dark:text-blue-300 text-blue-600"
        :href="courseLink"
        target="_blank"
        >Course Outline</a
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { format } from "date-fns";

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
    format,
    getTimeDifference(start, end) {
      const difference =
        (new Date(end).getTime() - new Date(start).getTime()) / 3600;
      return difference;
    },
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
};
</script>
