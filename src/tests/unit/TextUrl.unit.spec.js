import { mount, RouterLinkStub } from "@vue/test-utils";
import TextUrl from "@/components/TextUrl.vue";

describe("TextUrl", () => {
  test("should render a router-link if router prop is true", async () => {
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
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/test-link");
    expect(wrapper.text()).toBe("Test Text");
  });

  test("should render an anchor tag if router prop is false", async () => {
    const wrapper = mount(TextUrl, {
      propsData: {
        router: false,
        text: "Test Text",
        link: "http://test.com",
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.attributes("href")).toBe("http://test.com");
    expect(wrapper.attributes("target")).toBe("_blank");
    expect(wrapper.text()).toBe("Test Text");
  });
});
