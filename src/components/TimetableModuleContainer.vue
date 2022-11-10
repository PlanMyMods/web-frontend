<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2  md:mr-10 mt-10">
    <div v-for="(mod, index) in modules" class="flex justify-start mb-3 gap-3">
      <div class="w-3 h-full bg-red-100"></div>
      <div class="w-[14.5rem] xl:min-w-[20rem]">
        <div class="">{{ mod.title }}</div>
        <div>
          Exam: {{ formatUnixTime(mod.exam.start) }} •
          {{ getTimeDifference(mod.exam.start, mod.exam.end) }}
          hrs
        </div>
      </div>
      <div>
        <button class="w-6 h-full">
          <img src="/assets/trash.svg" @click="modules.splice(index, 1)" />
        </button>
      </div>
      <div>
        <button class="w-6 h-full" @click="mod.showModule = !mod.showModule">
          <img v-if="mod.showModule" src="/assets/eyeOpen.svg" />
          <img v-else src="/assets/eyeClosed.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { formatUnixTime, getTimeDifference } from "@/utils/datetime";
export default {
  name: "TimetableModuleContainer",
  data() {
    return {
      modules: [
        {
          title: "IS110 Information Systems and Innovation",
          exam: {
            start: 1669681800,
            end: 1669689000,
            day: 2,
          },
          recommended: {
            hours: {
              total: 4,
            },
          },
          showModule: true,
        },
        {
          title: "IS111 Introduction to Programming",
          exam: {
            start: 1669681800,
            end: 1669689000,
            day: 2,
          },
          recommended: {
            hours: {
              total: 8,
            },
          },
          showModule: true,
        },
        {
          title: "IS112 Data Management",
          exam: {
            start: 1669681800,
            end: 1669689000,
            day: 2,
          },
          recommended: {
            hours: {
              total: 12,
            },
          },
          showModule: true,
        },
        {
          title: "IS112 Data Management",
          exam: {
            start: 1669681800,
            end: 1669689000,
            day: 2,
          },
          recommended: {
            hours: {
              total: 12,
            },
          },
          showModule: true,
        },
        {
          title: "IS112 Data Management",
          exam: {
            start: 1669681800,
            end: 1669689000,
            day: 2,
          },
          recommended: {
            hours: {
              total: 12,
            },
          },
          showModule: true,
        },
      ],
    };
  },
  methods: {
    formatUnixTime,
    getTimeDifference,
  },
};
</script>
