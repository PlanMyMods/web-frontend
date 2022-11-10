<template>
  <div class="min-w-[55rem] text-sm font-semibold">
    <div class="flex justify-between ml-14">
      <div v-for="hour in hours">{{ hour }}</div>
    </div>
    <div
      class="m-0 border rounded border-solid border-gray-400 dark:border-gray-600"
    >
      <ol>
        <TimetableRow v-for="day in days" :key="day" :day="day" />
      </ol>
    </div>
    <TimetableModule />
  </div>
</template>

<script>
import TimetableRow from "./TimetableRow.vue";
import TimetableModule from "./TimetableModule.vue";

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
  components: { TimetableRow },
};
</script>
