<template>
  <ModuleCardSkeleton v-for="n in 3" :key="n" />
</template>

<script>
import ModuleCardSkeleton from "@/components/ModuleCardSkeleton.vue";

export default {
  name: "ModuleListSkeleton",
  components: { ModuleCardSkeleton },
};
</script>
