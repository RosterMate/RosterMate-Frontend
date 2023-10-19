import React from "react";
import ShiftChangesCard from "./ShiftChangesCard";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("ShiftChangesCard Component", () => {
  it("renders without crashing", () => {
    const props = {
      id: "1",
      RequestSenderName: "John",
      RequestReceiverName: "Doe",
      fromShiftSlot: "Morning",
      ToShiftSlot: "Evening",
      Reason: "Personal",
      Status: "Pending",
    };
    const wrapper = shallow(<ShiftChangesCard {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders with correct props", () => {
    const props = {
      id: "1",
      RequestSenderName: "John",
      RequestReceiverName: "Doe",
      fromShiftSlot: "Morning",
      ToShiftSlot: "Evening",
      Reason: "Personal",
      Status: "Pending",
    };
    const wrapper = shallow(<ShiftChangesCard {...props} />);
    expect(wrapper.find(".card-title").at(0).text()).toEqual(props.RequestSenderName);
    expect(wrapper.find(".card-title").at(1).text()).toEqual(props.RequestReceiverName);
    expect(wrapper.find(".card-content").at(0).text()).toEqual(props.fromShiftSlot);
    expect(wrapper.find(".card-content").at(1).text()).toEqual(props.ToShiftSlot);
    expect(wrapper.find(".card-content").at(2).text()).toEqual(props.Reason);
    expect(wrapper.find(".card-content").at(3).text()).toEqual(props.Status);
  });
});
