<template>
  <div
    class="dark:bg-gray-800 px-16 py-9 rounded-2xl flex space-x-10 max-w-screen-2xl"
  >
    <section class="min-w-[70%]">
      <h1 class="text-3xl dark:text-blue-300 text-blue-600 font-extrabold">
        {{ title }}
      </h1>
      <div class="flex space-x-2 mt-3">
        <div v-for="(badge, index) in badges" :key="index" class="">
          <Badge :badge-name="badge.name" :badge-image-path="badge.imagePath" />
        </div>
      </div>
      <p class="text-lg dark:text-gray-300 text-gray-500 mt-3 pt-2 pb-2">
        {{ shortDescription }}
      </p>
      <div class="text-black dark:text-gray-300">
        <p class="font-bold mt-3">Preclusions:</p>
        <p class="mt-2">{{ preclusion }}</p>
        <p class="font-bold mt-3">Prerequisite:</p>
        <p class="mt-2">{{ prerequisite }}</p>
        <p class="font-bold mt-3">Co-requisite:</p>
        <p class="mt-2">{{ corequisite }}</p>
      </div>
    </section>

    <section>
      <div class="flex w-[21rem] text-black dark:text-gray-300">
        <button
          v-for="term in terms"
          :key="term"
          class="px-3 pb-2 border-b text-sm font-medium text-[#6B7280;]"
        >
          Term {{ term }}
        </button>
      </div>
      <div class="mt-5 space-y-3 text-sm px-3 dark:text-gray-300">
        <div>
          <h3 class="font-bold">Exams:</h3>
          <p class="mt-2">{{ examDateTime }} • {{ examHours }} hrs</p>
        </div>
        <div>
          <h3 class="font-bold">Course Assessment:</h3>
          <div
            v-for="(courseAssessment, index) in courseAssessments"
            :key="index"
            class="flex items-center space-x-2"
          >
            <p class="w-32">{{ courseAssessment.name }}</p>
            <p class="w-8">{{ courseAssessment.weightage * 100 }}%</p>
            <div class="flex space-x-0.5">
              <div
                v-for="(_, index) in Array(
                  Math.ceil(Number(courseAssessment.weightage) * 10)
                )"
                :key="index"
                class="h-2.5 w-[calc(1rem)] bg-blue-100"
              ></div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="font-bold">Estimated Hours:</h3>
          <p class="mt-2">{{ recommendedWeeklyHours }} hrs</p>
        </div>

        <div>
          <a class="dark:text-blue-300 text-blue-600" :href="courseLink"
            >Course Outline</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Badge from "./Badge.vue";
export default {
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
        // The value must be an Array of Objects and have id as a property
        // eg. ["1", "2", "3A", "3B"]
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
    examDateTime: String,
    examHours: [String, Number],
    courseAssessments: {
      validator(value) {
        // The value must be an Array of Objects and have id as a property
        // eg. [{ name: "1", weightage: 0.5 }, { name: "2", weightage: 0.5 }]
        return (
          Array.isArray(value) &&
          value.every((item) => item.name && item.weightage)
        );
      },
    },
    recommendedWeeklyHours: [String, Number],
    courseLink: String,
  },
  components: { Badge },
};
</script>
