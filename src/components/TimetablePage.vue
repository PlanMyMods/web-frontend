<template>
  <div v-if="user !== null" class="flex flex-wrap">
    <Timetable :days="sortByDayofWeek(user.timetable)" />
    <TimetableModuleContainer :modules="flattenTimetableObj(user.timetable)" />
  </div>
  <div v-else class="flex flex-wrap">
    <Timetable />
    <TimetableModuleContainer />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { auth } from "@/utils/firebase";
import Timetable from "@/components/Timetable.vue";
import TimetableModuleContainer from "@/components/TimetableModuleContainer.vue";

export default {
  name: "TimetablePage",
  setup() {
    const store = useStore();
    auth.onAuthStateChanged((user) => {
      store.dispatch("fetchUser", user);
    });
    return {
      store,
    };
  },
  computed: {
    user() {
      return this.store.state.user.data;
    },
  },
  methods: {
    sortByDayofWeek(schedule) {
      const days = {
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
      };
      for (const day in schedule) {
        days[day] = schedule[day];
      }
      return days;
    },
    flattenTimetableObj(schedule) {
      console.log(schedule);
      const flattened = [];
      for (const day in schedule) {
        if (schedule[day].length === 0) {
          continue;
        }
        console.log(schedule[day]);
        for (const row of schedule[day]) {
          if (row.length === 0) {
            continue;
          }
          for (const mod of row) {
            flattened.push({ ...mod });
          }
        }
      }
      return flattened;
    },
  },
  components: {
    Timetable,
    TimetableModuleContainer,
  },
};
</script>
