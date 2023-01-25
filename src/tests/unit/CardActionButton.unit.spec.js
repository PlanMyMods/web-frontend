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
  const buttonWrapper = activeBtnComponent.find("button");
  test("should match snapshot", () => {
    expect(activeBtnComponent.html()).toMatchSnapshot();
  });
  test("should have the correct text", () => {
    expect(activeBtnComponent.text()).toContain(text);
  });
  test("should have the correct button text color class", () => {
    expect(buttonWrapper.classes()).toContain(textColor);
  });
  test("should have the correct button text color class in dark mode", () => {
    expect(buttonWrapper.classes()).toContain(`dark:${textColorDark}`);
  });
  test("should have the correct button color class", () => {
    expect(buttonWrapper.classes()).toContain(color);
  });
  test("should have the correct button color class in dark mode", () => {
    expect(buttonWrapper.classes()).toContain(`dark:${colorDark}`);
  });
  test("should have the correct button hover color class", () => {
    expect(buttonWrapper.classes()).toContain(`hover:${hoverColor}`);
  });
  test("should have the correct button hover color class in dark mode", () => {
    expect(buttonWrapper.classes()).toContain(`dark:hover:${hoverColorDark}`);
  });
  test("should not have the cursor-not-allowed class when button not disabled", () => {
    expect(buttonWrapper.find("cursor-not-allowed").exists()).toBe(false);
  });
  test("should have the cursor-not-allowed class when disabled in dark mode", () => {
    const disabledBtn = mount(CardActionButton, {
      propsData: {
        text: text,
        textColor: textColor,
        color: color,
        hoverColor: hoverColor,
        disabled: true,
      },
    });
    expect(disabledBtn.find("button").classes()).toContain(
      "cursor-not-allowed"
    );
  });
});
