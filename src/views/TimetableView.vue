<template>
  <div
    class="bg-gray-50 dark:bg-gray-800 px-6 py-6 md:px-8 md:py-8 lg:px-16 lg:py-9 rounded-2xl h-full"
  >
    <div class="flex flex-wrap">
      <Timetable />
      <TimetableModuleContainer />
      <SelectModule/>
      <buttonAddModule/>

    </div>
  </div>
</template>

<script>
import Timetable from "@/components/Timetable.vue";
import TimetableModuleContainer from "@/components/TimetableModuleContainer.vue";
import SelectModule from "@/components/SelectModule.vue";
import buttonAddModule from "@/components/buttonAddModule.vue";

export default {
  name: "TimetableView",
  components: { Timetable, TimetableModuleContainer, SelectModule, buttonAddModule  },
};
</script>
