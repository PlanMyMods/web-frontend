<template>
  <li
    class="relative flex flex-initial min-h-[3.6rem] border-b border-solid border-gray-400 dark:border-gray-600"
  >
    <div
      class="sticky z-40 flex flex-[0_0_3.5rem] left-0 justify-center items-center border-r border-solid border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 uppercase break-all"
    >
      {{ day }}
    </div>
    <div
      class="relative flex flex-auto flex-col min-h-[3.6rem] p-1 pl-0 bg-[length:13.34%_14.285%] bg-gradient-row-50 dark:bg-gradient-row-50-dark"
    >
      <!-- <TimetableModule
        v-for="mod in modules"
        :key="mod.code"
        :code="mod.code"
        :start="mod.terms.at(-1).class.time_start"
        :end="mod.terms.at(-1).class.time_end"
        :courseLink="mod.link"
      /> -->

      <div
        v-for="modules in duplicatedModules"
        class="flex relative flex-[1_0_auto] min-w-[4rem]"
      >
        <TimetableModule
          v-for="(mod, index) in modules"
          :key="mod.code"
          :code="mod.code"
          :cellMarginLeft="
            getTimetableCellValues(mod.terms.at(-1).class, modules, index)
              .cellMarginLeft
          "
          :cellWidth="
            getTimetableCellValues(mod.terms.at(-1).class, modules, index)
              .cellWidth
          "
          :courseLink="mod.link"
        />
      </div>
    </div>
  </li>
</template>

<script>
import TimetableModule from "./TimetableModule.vue";
import { calcTimetableCellValues } from "@/utils/datetime";

export default {
  setup(props) {
    console.log(props.modules);
  },
  methods: {
    previousDurationSum(index) {
      return modules[index];
    },
    getTimetableCellValues(modClass, modules, index) {
      const start = modClass.time_start;
      const end = modClass.time_end;
      const cellValues = calcTimetableCellValues(start, end);
      if (index > 0) {
        let marginToSubtract = 0;
        for (let i = 0; i < index; i++) {
          const prevModClass = modules[i].terms.at(-1).class;
          const prevStart = prevModClass.time_start;
          const prevEnd = prevModClass.time_end;
          const prevCellValues = calcTimetableCellValues(prevStart, prevEnd);
          marginToSubtract +=
            prevCellValues.cellWidth + prevCellValues.cellMarginLeft;
        }
        return {
          cellMarginLeft: cellValues.cellMarginLeft - marginToSubtract,
          cellWidth: cellValues.cellWidth,
        };
      } else {
        return cellValues;
      }
    },
  },
  props: {
    day: {
      type: String,
      required: true,
    },
    duplicatedModules: {
      type: Array,
      default: [],
    },
  },
  components: {
    TimetableModule,
  },
};
</script>
