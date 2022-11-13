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
          <TimetableRow
            v-for="day in days"
            :key="day.day"
            :day="day.day"
            :duplicatedModules="day.modules"
          />
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import TimetableRow from "./TimetableRow.vue";

export default {
  name: "Timetable",
  data() {
    return {
      days: [
        // TODO: store user modules on firebase
        // TODO: convert modules into duplicated modules data structure
        {
          day: "MON",
          modules: [
            [
              {
                code: "IS111",
                link: "/module/IS111",
                terms: [
                  {
                    class: {
                      time_start: "0815",
                      time_end: "1130",
                    },
                  },
                ],
              },
            ],
          ],
        },
        {
          day: "TUE",
          modules: [
            [
              {
                code: "IS216",
                link: "/module/IS216",
                terms: [
                  {
                    class: {
                      time_start: "1210",
                      time_end: "1525",
                    },
                  },
                ],
              },
              {
                code: "IS112",
                link: "/module/IS112",
                terms: [
                  {
                    class: {
                      time_start: "1530",
                      time_end: "1845",
                    },
                  },
                ],
              },
            ],
            [
              {
                code: "IS215",
                link: "/module/IS215",
                terms: [
                  {
                    class: {
                      time_start: "1210",
                      time_end: "1525",
                    },
                  },
                ],
              },
            ],
          ],
        },
        {
          day: "WED",
          modules: [
            [
              {
                code: "IS110",
                link: "/module/IS110",
                terms: [
                  {
                    class: {
                      time_start: "1210",
                      time_end: "1525",
                    },
                  },
                ],
              },
            ],
          ],
        },
        {
          day: "THU",
          modules: [[]],
        },
        {
          day: "FRI",
          modules: [[]],
        },
        {
          day: "SAT",
          modules: [[]],
        },
      ],
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
