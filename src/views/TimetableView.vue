<template>
  <div
    class="bg-gray-50 dark:bg-gray-800 px-3 py-6 sm:px-6 md:p-8 lg:px-16 lg:py-9 rounded-2xl h-full"
  >
    <div class="flex flex-wrap">
      <Timetable />
      <TimetableModuleContainer />
    </div>
  </div>
</template>

<script>
import Timetable from "@/components/Timetable.vue";
import TimetableModuleContainer from "@/components/TimetableModuleContainer.vue";

export default {
  name: "TimetableView",
  components: { Timetable, TimetableModuleContainer },
};
</script>
