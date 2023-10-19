import React from "react";
import { shallow, configure } from "enzyme";
import Input from "./Input";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("Input component", () => {
  const props = {
    hName: "Test Input",
    type: "text",
    placeholder: "Enter text",
    id: "test-input",
    value: "test value",
    onChange: jest.fn(),
  };

  it("should render without errors", () => {
    const wrapper = shallow(<Input {...props} />);
    const inputBox = wrapper.find("#test-input");
    expect(inputBox.length).toBe(1);
  });

  it("should render the correct props", () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find("p").text()).toBe("Test Input");
    expect(wrapper.find("#test-input").prop("type")).toBe("text");
    expect(wrapper.find("#test-input").prop("placeholder")).toBe("Enter text");
    expect(wrapper.find("#test-input").prop("value")).toBe("test value");
  });

  it("should call onChange function when input value changes", () => {
    const wrapper = shallow(<Input {...props} />);
    const inputBox = wrapper.find("#test-input");
    inputBox.simulate("change", { target: { value: "new value" } });
    expect(props.onChange).toHaveBeenCalled();
  });
});
