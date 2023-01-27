import { mount } from "@vue/test-utils";
import CardTextInput from "@/components/CardTextInput.vue";

describe("CardTextInput", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CardTextInput, {
      propsData: {
        label: "Name",
      },
    });
  });
  test("should emit a update:modelValue event when input value changes", async () => {
    const input = wrapper.find("input");
    input.setValue("John Doe");
    input.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")[0]).toEqual(["John Doe"]);
  });
  test("should bind the input value to the v-model", async () => {
    wrapper.setData({ value: "Jane Doe" });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("input").element.value).toBe("Jane Doe");
  });
});
