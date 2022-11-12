<template>
  <div class="text-xs lg:text-base">
    <div class="font-bold mt-3">Preclusions:</div>
    <div v-html="transformedPreclusionString" />
    <div class="font-bold mt-3 mb-2">Prerequisite:</div>
    <div v-html="transformedPrereqString" />
    <div class="font-bold mt-3">Co-requisite:</div>
    <div v-html="transformedCoreqString" />
  </div>
</template>

<script>
import { getCourseLink } from "@/utils/firebase";

export default {
  name: "ModuleCardPreqrequisite",
  data() {
    return {
      transformedPreclusionString: "",
      transformedPrereqString: "",
      transformedCoreqString: "",
    };
  },
  async created() {
    this.transformedPreclusionString = await this.getTransformedString(
      this.preclusions
    );
    this.transformedPrereqString = await this.getTransformedString(
      this.prerequisites
    );
    this.transformedCoreqString = await this.getTransformedString(
      this.corequisites
    );
  },
  methods: {
    async getTransformedString(target) {
      if (!target || !target.string || !target.ref) {
        return "<div class='dark:text-gray-500 text-gray-400'>None</div>";
      }
      const prereq = target.string;
      let transformedString = "";

      for (let i = 0; i < prereq.length; i++) {
        if (!/^\d$/.test(prereq[i])) {
          transformedString += prereq[i];
          continue;
        }
        const docRef = target.ref[Number(prereq[i])];

        const prereqModCode = docRef.id;
        const link = await getCourseLink(prereqModCode);

        transformedString += `<a
          class="dark:text-blue-300 text-blue-600"
          href="${link}"
          target="_blank"
          >${prereqModCode}</a>`;
      }

      return transformedString;
    },
  },
  props: {
    preclusions: {
      type: Object,
      default: null,
    },
    prerequisites: {
      type: Object,
      default: null,
    },
    corequisites: {
      type: Object,
      default: null,
    },
  },
};
</script>
