<template>
  <li
    class="relative flex flex-initial min-h-[3.6rem] border-b border-solid border-gray-400 dark:border-gray-600"
  >
    <div
      class="sticky z-50 flex flex-[0_0_3.5rem] left-0 justify-center items-center border-r border-solid border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 uppercase"
    >
      {{ day }}
    </div>
    <div
      class="relative flex flex-auto flex-col min-h-[3.6rem] p-1 bg-[length:13.34%_14.285%] bg-gradient-row-50 dark:bg-gradient-row-50-dark"
    ></div>
  </li>
</template>

<script>
export default {
  props: {
    day: String,
  },
};
</script>

<style scoped>
.bg-gradient-row-50 {
  background-image: linear-gradient(90deg, #e0e0e0 50%, #f5f5f5 50%);
}

.bg-gradient-row-50-dark {
  background-image: linear-gradient(90deg, #334155 50%, #1f2937 50%);
}
</style>
