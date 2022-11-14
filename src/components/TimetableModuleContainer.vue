<template>
  <div
    class="grid gap-4 grid-cols-1 lg:grid-cols-2 w-full content-between mt-10"
  >
    <div
      v-for="(mod, index) in modules"
      class="flex justify-center md:justify-start mb-3 gap-3"
    >
      <div class="w-3 h-full bg-red-100" />
      <div class="w-[14.5rem] xl:min-w-[20rem]">
        <div class="font-semibold">{{ mod.code }}</div>
        <div class="">{{ mod.name }}</div>
        <div>{{ getExamString(mod.exam.start, mod.exam.end) }}</div>
      </div>
      <div>
        <button class="w-6 h-full">
          <img src="/assets/trash.svg" @click="handleDeleteModule(mod)" />
        </button>
      </div>
      <div>
        <button class="w-6 h-full" @click="handleShowModuleClick(mod)">
          <img v-show="mod.showModule" src="/assets/eyeOpen.svg" />
          <img v-show="!mod.showModule" src="/assets/eyeClosed.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { formatUnixTime, getTimeDifference } from "@/utils/datetime";
import { useStore } from "vuex";

export default {
  name: "TimetableModuleContainer",
  setup() {
    const store = useStore();
    return { store };
  },
  computed: {
    user() {
      return this.store.state.user.data;
    },
  },
  props: {
    modules: {
      type: Array,
      default: [],
    },
  },
  methods: {
    formatUnixTime,
    getTimeDifference,
    getExamString(start, end) {
      const startDateTime = formatUnixTime(start);
      const hours = getTimeDifference(start, end);
      return `Exam: ${startDateTime} • ${hours} hrs`;
    },
    handleShowModuleClick(mod) {
      this.store.dispatch("updateModuleVisibilityToUserTimetable", {
        moduleCode: mod.code,
        sectionCode: "AY2223T1G1",
        showModule: mod.showModule,
      });
    },
    handleDeleteModule(mod) {
      console.log("handleDeleteModule");
      this.store.dispatch("removeFromUserTimetable", {
        moduleCode: mod.code,
        sectionCode: "AY2223T1G1",
      });
    },
  },
};
</script>
