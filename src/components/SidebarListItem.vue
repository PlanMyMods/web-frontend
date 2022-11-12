<template>
  <router-link v-if="linkRoute !== null" :to="linkRoute">
    <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
      <div
        class="flex items-center text-base font-normal text-gray-900 dark:text-white"
      >
        <img
          class="w-6 h-6 text-gray-500 dark:text-gray-400"
          :src="linkImagePath"
        />
        <span v-if="linkName" class="ml-3">
          {{ linkName }}
        </span>
      </div>
    </div>
  </router-link>
  <button v-else>
    <div class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
      <div
        class="flex items-center text-base font-normal text-gray-900 dark:text-white"
      >
        <img
          class="w-6 h-6 text-gray-500 dark:text-gray-400"
          :src="linkImagePath"
        />
        <span v-if="linkName" class="ml-3">
          {{ linkName }}
        </span>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    linkName: {
      type: String,
      default: null,
    },
    linkRoute: {
      type: String,
      default: null,
    },
    linkImagePath: {
      type: String,
      required: true,
    },
  },
};
</script>
