<template>
  <div class="mt-5">
    <button
      :class="`${color} dark:${colorDark} hover:${hoverColor} dark:hover:${hoverColorDark} ${textColor} dark:${textColorDark} font-bold rounded p-3 h-full w-full align-middle flex-auto`"
    >
      <div
        class="flex relative w-full box-border align-baseline justify-center"
      >
        {{ text }}
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "CardActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    colorDark: {
      type: String,
      default: (props) => props.color,
    },
    textColor: {
      type: String,
      required: true,
    },
    textColorDark: {
      type: String,
      default: (props) => props.textColor,
    },
    hoverColor: {
      type: String,
      required: true,
    },
    hoverColorDark: {
      type: String,
      default: (props) => props.hoverColorDark,
    },
  },
};
</script>
