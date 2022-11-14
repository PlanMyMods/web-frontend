<template>
  <div
    class="bg-gray-50 dark:bg-gray-800 px-3 py-6 sm:px-6 md:p-8 lg:px-16 lg:py-9 rounded-2xl h-full"
  >
    <TimetablePage />
  </div>
</template>

<script>
import TimetablePage from "@/components/TimetablePage.vue";

export default {
  name: "TimetableView",
  components: { TimetablePage },
};
</script>
