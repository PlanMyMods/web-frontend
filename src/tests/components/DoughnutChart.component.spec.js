import { mount } from "@vue/test-utils";
import DoughnutChart from "@/components/DoughnutChart.vue";

describe("DoughnutChart", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(DoughnutChart, {
      propsData: {
        assessmentName: ["Assessment 1", "Assessment 2"],
        weightage: [10, 20],
      },
    });
  });
  test("should update the chart when props change", async () => {
    wrapper.setProps({
      assessmentName: ["Assessment 3", "Assessment 4"],
      weightage: [30, 40],
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.assessmentName).toEqual(["Assessment 3", "Assessment 4"]);
    expect(wrapper.vm.weightage).toEqual([30, 40]);
  });
});
