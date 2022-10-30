<template>
  <div
    class="dark:bg-gray-800 px-6 py-6 md:px-8 md:py-8 lg:px-16 lg:py-9 rounded-2xl flex flex-col xl:flex-row justify-between space-y-10 lg:space-x-10 max-w-screen-2xl bg-gray-50 lg:grid lg:grid-cols-4 xl:grid-cols-5"
  >
    <section class="lg:col-span-2 xl:col-span-3">
      <div
        class="text-lg md:text-lg lg:text-2xl dark:text-blue-300 text-blue-600 font-extrabold"
      >
        {{ title }}
      </div>
      <div class="flex space-x-2 mt-3">
        <Badge
          v-for="(badge, index) in badges"
          :key="index"
          :badge-name="badge.name"
          :badge-image-path="badge.imagePath"
        />
      </div>
      <div
        class="text-xs lg:text-base dark:text-gray-300 text-gray-500 mt-3 pt-2 pb-2"
      >
        {{ shortDescription }}
      </div>
      <div class="text-xs lg:text-base text-black dark:text-gray-300">
        <div class="font-bold mt-3">Preclusions:</div>
        {{ preclusion }}
        <div class="font-bold mt-3">Prerequisite:</div>
        {{ prerequisite }}
        <div class="font-bold mt-3">Co-requisite:</div>
        {{ corequisite }}
      </div>
    </section>

    <section class="text-xs lg:text-sm lg:col-span-2">
      <div class="flex text-black dark:text-gray-300">
        <button
          v-for="term in validTerms"
          :key="term"
          @click="updateSelectedTerm(term)"
          class="px-3 pb-2 border-b w-[5rem] font-medium text-[#6B7280;]"
          :class="{
            'border-b-2 dark:border-b-blue-300 border-b-blue-600 dark:text-blue-300 text-blue-600':
              isTermSelected(term),
            'dark:text-gray-500 text-gray-700': isTermValid(term),
          }"
          :disabled="isTermValid(term)"
        >
          Term {{ term }}
        </button>
      </div>
      <div class="mt-5 space-y-3 dark:text-gray-300">
        <div>
          <div class="font-bold mb-2">Exams:</div>
          <div>
            {{ format(terms[selectedIndex].exam.start, "dd-MMMM-yyyy") }} •
            {{
              getTimeDifference(
                terms[selectedIndex].exam.start,
                terms[selectedIndex].exam.end
              )
            }}
            hrs
          </div>
        </div>
        <div>
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
                v-for="(_, index) in Array(
                  Math.floor(assessment.weightage * 10)
                )"
                :key="index"
                class="h-2.5 w-4 rounded-sm bg-blue-100"
              ></div>
              <div
                v-if="(assessment.weightage * 100) % 10 !== 0"
                class="h-2.5 w-2 rounded-l-sm bg-blue-100"
              ></div>
            </div>
          </div>
        </div>
        <div>
          <div class="font-bold mb-2">Estimated Hours:</div>
          <div>
            {{ terms[selectedIndex].recommended.hours.total_weekly }} hrs
          </div>
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
    </section>
  </div>
</template>

<script>
import Badge from "./Badge.vue";
import { ref } from "vue";
import { format } from "date-fns";

export default {
  setup() {
    let selectedIndex = ref(0);
    return { selectedIndex };
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
      return !this.terms.some((item) => item.term.split("/")[1] === term);
    },
    isTermSelected(term) {
      // check if `term` exists in this.terms
      return term === this.terms[this.selectedIndex].term.split("/")[1];
    },
  },
  props: {
    title: String,
    badges: {
      validator(value) {
        // The value must be an Array of Objects and have icon & text as properties
        // eg. [{ name: "1", imagePath: "1" }, { name: "2", imagePath: "2" }]
        return (
          Array.isArray(value) &&
          value.every((item) => item.name && item.imagePath)
        );
      },
    },
    terms: {
      validator(value) {
        // The value must be an Array of Objects
        // TODO: Extract as a full validation function
        return (
          Array.isArray(value) &&
          value.every(
            (item) =>
              item.term && item.assessment && item.exam && item.recommended
          )
        );
      },
    },
    validTerms: {
      validator(value) {
        return (
          Array.isArray(value) &&
          value.every(
            (item) => typeof item === "string" || item instanceof String
          )
        );
      },
    },
    shortDescription: String,
    preclusion: String,
    prerequisite: String,
    corequisite: String,
    courseLink: String,
  },
  components: { Badge },
};
</script>
