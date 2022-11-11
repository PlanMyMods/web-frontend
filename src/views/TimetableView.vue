<template>
  <div class="flex flex-wrap">
    <Timetable />

    <TimetableModuleContainer />
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
