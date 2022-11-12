<template>
  <router-link :to="linkRoute">
    <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
      <div
        class="flex items-center text-base font-normal text-gray-900 dark:text-white"
      >
        <img
          class="w-6 h-6 text-gray-500 dark:text-gray-400"
          :src="linkImagePath"
        />
        <span v-if="!showSideBar" class="ml-3">
          {{ linkName }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    linkName: String,
    linkRoute: String,
    linkImagePath: String,
    showSideBar: Boolean,
  },
};
</script>
