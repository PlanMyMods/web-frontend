import { shallowMount } from "@vue/test-utils";
import CardTextInput from "@/components/CardTextInput.vue";

describe("CardTextInput", () => {
  const wrapper = shallowMount(CardTextInput, {
    propsData: {
      label: "Name",
    },
  });
  test("should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("should render the correct label", () => {
    expect(wrapper.find(".text-sm").text()).toBe("Name");
  });
  test("should update the value when input event is emitted", async () => {
    const input = wrapper.find("input");
    input.setValue("John Doe");
    input.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.value).toBe("John Doe");
  });
});
