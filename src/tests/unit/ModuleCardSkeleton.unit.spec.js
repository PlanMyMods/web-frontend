import { shallowMount } from "@vue/test-utils";
import ModuleCardSkeleton from "@/components/ModuleCardSkeleton.vue";

describe("ModuleCardSkeleton.vue", () => {
  test("should render the skeleton properly", () => {
    const wrapper = shallowMount(ModuleCardSkeleton);
    expect(wrapper.find(".animate-pulse").exists()).toBe(true);
  });
});
