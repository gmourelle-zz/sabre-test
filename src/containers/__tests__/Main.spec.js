import React from "react";
import Main from "../Main";
import { shallow } from "enzyme";

describe("<Main />", () => {
  let wrapper;
  const player = {
    name: "Guido",
    position: "Midfielder",
    nationality: "Arg",
    dateOfBirth: "1980-04-05"
  };

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  describe("render", () => {
    it("should display Row with Columns", () => {
      const wrapper2 = shallow(<Main />);

      //   expect(wrapper.find("Row").exists()).toBe(true);
      //   expect(wrapper.find("Col").exists()).toBe(true);
      console.log(wrapper2.debug());
    });
  });
});
