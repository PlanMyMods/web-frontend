<template>
  <div
    class="bg-gray-50 dark:bg-gray-800 px-3 py-6 sm:px-6 md:p-8 lg:px-16 lg:py-9 rounded-2xl flex flex-col sm:flex-row justify-between max-w-screen-2xl w-full lg:flex-row h-[16.2rem] animate-pulse"
  >
    <div class="grid content-center space-y-5 w-[100%] sm:w-[55%]">
      <div class="grid grid-cols-6 gap-4">
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-2"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-3"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-1"></div>
      </div>
      <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded"></div>
      <div class="grid grid-cols-6 gap-4">
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-1"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-4"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-1"></div>
      </div>
      <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded"></div>

      <div class="grid grid-cols-10 gap-4">
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-4"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-4"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-2"></div>
      </div>
      <div class="grid grid-cols-10 gap-4">
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-6"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-4"></div>
      </div>
    </div>
    <div class="hidden sm:grid content-center space-y-5 sm:w-[40%]">
      <div class="grid grid-cols-6 gap-4">
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-2"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-3"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-1"></div>
      </div>
      <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded"></div>
      <div class="grid grid-cols-6 gap-4">
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-1"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-4"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-1"></div>
      </div>
      <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded"></div>

      <div class="grid grid-cols-10 gap-4">
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-4"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-4"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-2"></div>
      </div>
      <div class="grid grid-cols-10 gap-4">
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-6"></div>
        <div class="h-2 bg-gray-300 dark:bg-slate-700 rounded col-span-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleCardSkeleton",
};
</script>
