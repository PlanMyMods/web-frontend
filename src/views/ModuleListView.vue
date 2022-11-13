<template>
  <Suspense>
    <ModuleListPage />

    <!-- loading state via #fallback slot -->
    <template #fallback>
      <ModuleListSkeleton />
    </template>
  </Suspense>
</template>

<script>
import ModuleListPage from "@/components/ModuleListPage.vue";
import ModuleListSkeleton from "./ModuleListSkeleton.vue";

export default {
  name: "ModuleListView",
  components: { ModuleListSkeleton, ModuleListPage },
};
</script>
