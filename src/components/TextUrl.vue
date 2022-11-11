<template>
  <router-link
    v-if="router"
    :to="link"
    class="dark:text-blue-300 text-blue-600 hover:text-blue-800 dark:hover:text-blue-600"
    >{{ text }}</router-link
  >
  <a
    v-else
    class="dark:text-blue-300 text-blue-600 hover:text-blue-800 dark:hover:text-blue-600"
    :href="link"
    target="_blank"
    >{{ text }}</a
  >
</template>

<script>
export default {
  name: "TextUrl",
  props: {
    router: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
