import React from "react";
import Player from "../Player";
import { shallow } from "enzyme";

describe("<Player />", () => {
  let wrapper;

  const player = {
    name: "Guido",
    position: "Midfielder",
    nationality: "Arg",
    dateOfBirth: "1980-04-05"
  };

  describe("render", () => {
    beforeEach(() => {
      wrapper = shallow(<Player player={player} />);
    });

    it("should display Row with Columns", () => {
      expect(wrapper.find("Row").exists()).toBe(true);
      expect(wrapper.find("Col").exists()).toBe(true);
    });

    it("should renders with props", () => {
      const span = wrapper.find("span");
      expect(span.at(0).text()).toEqual("Guido");
      expect(span.at(1).text()).toEqual("Midfielder");
      expect(span.at(2).text()).toEqual("Arg");
      expect(span.at(3).text()).toEqual("38");
    });
  });
});
