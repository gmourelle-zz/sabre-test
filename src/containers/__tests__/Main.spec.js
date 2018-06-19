import React from "react";
import Main from "../Main";
import { shallow } from "enzyme";

describe("<Main />", () => {
  let wrapper, getPlayers, filterPlayers;

  const players = [
    {
      name: "Guido",
      position: "Midfielder",
      nationality: "Arg",
      dateOfBirth: "1980-04-05"
    }
  ];

  beforeEach(() => {
    getPlayers = jest.fn();
    filterPlayers = jest.fn();

    wrapper = shallow(
      <Main
        getPlayers={getPlayers}
        filterPlayers={filterPlayers}
        players={players}
      />
    );
  });

  describe("render", () => {
    it("should display Row with filter-container", () => {
      const container = wrapper.find("Row.filter-container");
      expect(container.exists()).toBe(true);
      expect(wrapper.find("Row").exists()).toBe(true);
      expect(wrapper.find("Col").exists()).toBe(true);
    });

    it("should call `getPlayers`", () => {
      expect(getPlayers).toHaveBeenCalledTimes(1);
    });

    it("should call components", () => {
      expect(
        wrapper
          .find("FilterBar")
          .at(0)
          .props().onSearch
      ).toBe(filterPlayers);

      expect(
        wrapper
          .find("PlayersGrid")
          .at(0)
          .props().rows
      ).toEqual(players);
    });
  });
});
