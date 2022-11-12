<template>
  <div class="flex flex-col flex-nowrap box-border">
    <div
      class="flex flex-row justify-between whitespace-normal text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      <div>{{ text }}</div>
      <TextUrl
        v-if="withForgotPassword"
        class="font-normal"
        text="Forgot your password?"
        link="/"
        :router="true"
      />
    </div>
    <div
      class="flex bg-white dark:bg-gray-800 border dark:border-gray-600 drop-shadow mt-3 mb-1"
    >
      <button @click="obfuscateToggle" class="order-last ml-auto pl-sm mr-2">
        <img :src="`/assets/${eyeSvg}.svg`" alt="" />
      </button>
      <input
        class="inline-flex flex-auto whitespace-nowrap border-none focus:ring-0 text-left text-base select-auto w-full z-10 p-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800"
        name="password"
        :type="type"
        v-model="value"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
import TextUrl from "@/components/TextUrl.vue";

export default {
  name: "CardPasswordInput",
  data() {
    return {
      value: "",
      eyeSvg: "eyeOpen",
      type: "password",
    };
  },
  props: {
    text: {
      type: String,
      default: "Password:",
    },
    withForgotPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    obfuscateToggle() {
      this.eyeSvg === "eyeClosed"
        ? (this.eyeSvg = "eyeOpen")
        : (this.eyeSvg = "eyeClosed");
      this.type === "password"
        ? (this.type = "text")
        : (this.type = "password");
    },
  },
  components: {
    TextUrl,
  },
};
</script>
