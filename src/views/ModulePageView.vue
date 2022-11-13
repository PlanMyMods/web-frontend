<template>
  <Suspense>
    <div
      class="bg-gray-50 dark:bg-gray-800 px-3 py-6 sm:px-6 md:p-8 lg:px-16 lg:py-9 rounded-2xl h-full"
    >
      <!-- component with nested async dependencies -->
      <ModulePage />
    </div>

    <!-- loading state via #fallback slot -->
    <template #fallback>
      <ModulePageSkeleton />
    </template>
  </Suspense>
</template>

<script>
import ModulePageSkeleton from "@/views/ModulePageSkeleton.vue";
import ModulePage from "@/components/ModulePage.vue";

export default {
  name: "ModulePageView",
  components: {
    ModulePage,
    ModulePageSkeleton,
  },
};
</script>
