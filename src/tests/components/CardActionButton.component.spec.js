import { mount } from "@vue/test-utils";
import CardActionButton from "@/components/CardActionButton.vue";

describe("CardActionButton", () => {
  const text = "Button Text";
  const textColor = "text-gray-700";
  const textColorDark = "text-gray-300";
  const color = "bg-gray-200";
  const colorDark = "bg-gray-700";
  const hoverColor = "bg-gray-300";
  const hoverColorDark = "bg-gray-600";

  const activeBtnComponent = mount(CardActionButton, {
    propsData: {
      text: text,
      textColor: textColor,
      textColorDark: textColorDark,
      color: color,
      colorDark: colorDark,
      hoverColor: hoverColor,
      hoverColorDark: hoverColorDark,
      disabled: false,
    },
  });
  test("should emit a click event when clicked", async () => {
    const button = activeBtnComponent.find("button");
    button.trigger("click");
    await activeBtnComponent.vm.$nextTick();
    expect(activeBtnComponent.emitted().click).toBeTruthy();
  });
});
