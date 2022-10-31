<template>
  <div
    class="block-content text-xs lg:text-base dark:text-gray-300 text-gray-500"
  >
    <transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      mode="out-in"
    >
      <div
        v-if="!isExpanded"
        class="block-content__preview transition-transform"
      >
        <p ref="preview" v-html="description" />
      </div>
      <p
        v-else
        class="transition-all"
        :class="{
          'block-content__paragraph': true,
          'block-content__paragraph--is-expanded': isExpanded,
        }"
        v-html="description"
      />
    </transition>
    <button
      v-if="isToggleButtonRequired"
      type="button"
      class="block-content__button"
      aria-label="Toggle button"
      @click="isExpanded = !isExpanded"
    >
      {{ toggleCtaLabel }}
    </button>
  </div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from "vue";
export default {
  name: "ModuleCardDescription",
  props: {
    description: { type: String },
    visibleLines: { type: Number, default: 4 },
  },
  setup(props) {
    const { visibleLines } = toRefs(props);
    // Collapsed state
    // Assuming that default line-height is 24px
    const LINE_HEIGHT = 24;
    const maxHeightCollapsed = computed(() => LINE_HEIGHT * visibleLines.value);
    // Expanded state
    const isExpanded = ref(false);
    // Toggle button
    const preview = ref(null);
    onMounted(() => {
      const previewHeight = (preview.value ?? {}).clientHeight ?? 0;
      isToggleButtonRequired.value = previewHeight > maxHeightCollapsed.value;
    });
    const isToggleButtonRequired = ref(false);
    const toggleCtaLabel = computed(() =>
      isExpanded.value ? "Read less" : "Read more"
    );
    // Animation hooks
    const onBeforeEnter = (el) => {
      const htmlEl = el;
      htmlEl.style.height = maxHeightCollapsed.value + "px";
    };
    const onEnter = (el) => {
      const htmlEl = el;
      htmlEl.style.height = el.scrollHeight + "px";
    };
    const onAfterEnter = (el) => {
      const htmlEl = el;
      htmlEl.style.overflow = "hidden";
    };
    const onBeforeLeave = (el) => {
      const htmlEl = el;
      htmlEl.style.height = `${el.scrollHeight}px`;
      htmlEl.style.overflow = "hidden";
    };
    const onLeave = (el) => {
      const htmlEl = el;
      htmlEl.style.height = maxHeightCollapsed.value + "px";
      htmlEl.style.overflow = "hidden";
    };
    return {
      isExpanded,
      preview,
      isToggleButtonRequired,
      toggleCtaLabel,
      onBeforeEnter,
      onEnter,
      onAfterEnter,
      onBeforeLeave,
      onLeave,
    };
  },
};
</script>

<style scoped>
.block-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
}
.block-content__preview {
  /* default line-height is 24px */
  max-height: calc(24px * v-bind(visibleLines));
  overflow: hidden;
  color: white;
}
.block-content__paragraph {
  color: white;
  overflow: hidden;
}
.block-content__paragraph.block-content__paragraph--is-expanded {
  overflow: initial;
}
.block-content__button {
  color: white;
  text-decoration: underline;
  align-self: flex-end;
}
</style>
