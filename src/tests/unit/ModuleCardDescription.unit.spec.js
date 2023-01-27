import { mount } from "@vue/test-utils";
import ModuleCardDescription from "@/components/ModuleCardDescription.vue";

describe("ModuleCardDescription", () => {
  const wrapper = mount(ModuleCardDescription, {
    props: {
      description: "This is a test description",
      visibleLines: 1,
    },
  });
  test("should render the correct text", () => {
    const text = wrapper.get("p").text();
    expect(text).toBe("This is a test description");
  });
});
