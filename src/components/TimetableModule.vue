<template>
  <div
    class="z-30 flex flex-col box-border h-12 class-duration class-start-time font-medium text-center justify-center rounded-md text-sm mb-1"
    :class="`${color} dark:${colorDark} ${textColor} dark:${textColorDark} hover:${hoverColor}  dark:hover:${hoverColorDark}`"
  >
    <router-link :to="courseLink">
      <div>
        <div class="text-sm font-black tracking-widest break-all">
          {{ code }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TimetableModule",
  props: {
    index: {
      type: Number,
      default: 0,
    },
    code: {
      type: String,
      required: true,
    },
    cellMarginLeft: {
      type: Number,
      required: true,
    },
    cellWidth: {
      type: Number,
      required: true,
    },
    courseLink: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "bg-red-300",
    },
    colorDark: {
      type: String,
      default: (props) => props.color,
    },
    textColor: {
      type: String,
      default: "text-gray-700",
    },
    textColorDark: {
      type: String,
      default: (props) => props.textColor,
    },
    hoverColor: {
      type: String,
      default: "text-red-600",
    },
    hoverColorDark: {
      type: String,
      default: (props) => props.hoverColorDark,
    },
  },
};
</script>

<style scoped>
.class-start-time {
  margin-left: calc((v-bind(cellMarginLeft) - v-bind(index)) * 100% / 15);
}
.class-duration {
  width: calc(100% / 15 * v-bind(cellWidth));
}
</style>
