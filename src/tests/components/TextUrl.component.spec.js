import { mount, RouterLinkStub } from "@vue/test-utils";
import TextUrl from "@/components/TextUrl.vue";

describe("TextUrl", () => {
  test("should emit a click event when clicked", async () => {
    const wrapper = mount(TextUrl, {
      propsData: {
        router: true,
        text: "Test Text",
        link: "/test-link",
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    const link = wrapper.findComponent(RouterLinkStub);
    link.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
