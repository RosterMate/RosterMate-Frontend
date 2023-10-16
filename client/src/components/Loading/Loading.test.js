import React from "react";
import { shallow, configure } from "enzyme";
import Loading from "./index";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Loading Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders loading text", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find("p").text()).toEqual("Loading...");
  });

  it("renders loading spinner", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find(".loading-spinner").exists()).toBe(true);
  });
});
