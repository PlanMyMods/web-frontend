<template>
  <div
    class="bg-gray-50 dark:bg-gray-800 px-3 py-6 sm:px-6 md:p-8 lg:px-16 lg:py-9 rounded-2xl flex flex-col xl:flex-row justify-between space-y-10 lg:space-x-10 max-w-screen-2xl lg:flex-row"
  >
    <section>
      <TextUrl
        :text="`${mod.code} ${mod.name}`"
        :link="linkRoute"
        :router="true"
        class="text-lg md:text-lg lg:text-2xl font-extrabold"
      />
      <div class="flex space-x-2 mt-3">
        <Badge
          v-for="(badge, index) in mod.badges"
          :key="index"
          :badge-name="badge.name"
          :badge-image-path="badge.imagePath"
        />
      </div>
      <div class="mt-3 pt-2 pb-2">
        <ModuleCardDescription :description="mod.description.long" />
      </div>
      <ModuleCardPrerequisite
        :preclusions="mod.preclusions"
        :prerequisites="mod.prerequisites"
        :corequisites="mod.corequisites"
      />
    </section>

    <section class="text-xs lg:text-sm w-full">
      <ModuleCardTerms
        v-if="validTerm(mod.terms)"
        :terms="mod.terms"
        :validTerms="validTerms"
        :courseLink="mod.link"
      />
    </section>
  </div>
</template>

<script>
import Badge from "./Badge.vue";
import ModuleCardTerms from "./ModuleCardTerms.vue";
import ModuleCardDescription from "./ModuleCardDescription.vue";
import ModuleCardPrerequisite from "./ModuleCardPrerequisite.vue";
import TextUrl from "./TextUrl.vue";

export default {
  name: "ModuleCard",
  methods: {
    validTerm(terms) {
      return terms.length > 0;
    },
  },
  props: {
    mod: {
      type: Object,
      required: true,
    },
    linkRoute: {
      type: String,
    },
    validTerms: {
      required: true,
      validator(value) {
        return (
          Array.isArray(value) &&
          value.every(
            (item) => typeof item === "string" || item instanceof String
          )
        );
      },
    },
  },
  components: {
    Badge,
    ModuleCardTerms,
    ModuleCardDescription,
    ModuleCardPrerequisite,
    TextUrl,
  },
};
</script>
