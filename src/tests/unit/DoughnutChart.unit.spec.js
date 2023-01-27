import { shallowMount } from "@vue/test-utils";
import DoughnutChart from "@/components/DoughnutChart.vue";

describe("DoughnutChart", () => {
  const wrapper = shallowMount(DoughnutChart, {
    propsData: {
      assessmentName: ["Assessment 1", "Assessment 2"],
      weightage: [10, 20],
    },
  });
  test("should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("should render the correct labels", () => {
    expect(wrapper.vm.assessmentName).toEqual(["Assessment 1", "Assessment 2"]);
  });
  test("should render the correct weightage", () => {
    expect(wrapper.vm.weightage).toEqual([10, 20]);
  });
  test("should render a canvas element", () => {
    expect(wrapper.find("canvas").exists()).toBe(true);
  });
});
