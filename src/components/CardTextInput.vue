<template>
  <div class="flex flex-col flex-nowrap box-border">
    <div
      class="whitespace-normal text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {{ label }}
    </div>
    <div
      class="bg-white dark:bg-gray-800 border dark:border-gray-600 drop-shadow mt-3 mb-1"
    >
      <input
        class="relative inline-flex flex-auto whitespace-nowrap focus:outline-none text-left text-base select-auto w-full z-10 p-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800"
        :name="label"
        v-model="value"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTextInput",
  data() {
    return { value: "" };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
