<template>
  <div class="flex-[0_0_100%] overflow-auto overscroll-x-none">
    <div class="w-full min-w-[55rem] text-sm font-semibold">
      <div class="flex justify-between ml-14">
        <div v-for="hour in hours" class="translate-x-[-50%]">{{ hour }}</div>
        <span></span>
      </div>
      <div
        class="m-0 border rounded border-solid border-gray-400 dark:border-gray-600"
      >
        <ol>
          <TimetableRow v-for="day in days" :key="day" :day="day" />
        </ol>
      </div>
    </div>
    
    <TimetableModule />
    <SelectModule/>
    <buttonAddModule/>
  </div>
</template>

<script>
import TimetableRow from "./TimetableRow.vue";
import TimetableModule from "./TimetableModule.vue";
import SelectModule from "./SelectModule.vue";
import buttonAddModule from "./buttonAddModule.vue";

export default {
  name: "Timetable",
  data() {
    return {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      hours: [
        "0800",
        "0900",
        "1000",
        "1100",
        "1200",
        "1300",
        "1400",
        "1500",
        "1600",
        "1700",
        "1800",
        "1900",
        "2000",
        "2100",
        "2200",
      ],
    };
  },
  components: { TimetableRow, SelectModule, TimetableModule },
};
</script>
