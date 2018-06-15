import React from "react";
import PlayersGrid from "../PlayersGrid";
import Player from "../Player";
import { shallow } from "enzyme";
import { Container, ListGroup, Alert } from "reactstrap";

describe("<PlayersGrid />", () => {
  let wrapper;
  const player = {
    name: "Guido",
    position: "Midfielder",
    nationality: "Arg",
    dateOfBirth: "1980-04-05"
  };

  beforeEach(() => {
    wrapper = shallow(<PlayersGrid rows={[player]} />);
  });

  describe('render', () => {
    it("should display Container with player__container", () => {
      const container = wrapper.find("Container.player__container");
      expect(container.exists()).toBe(true);
    });

    it("should display ListGroup with Row with Columns", () => {
      const container = wrapper.find("Container");
      expect(container.exists()).toBe(true);
      expect(container.find("ListGroup").exists()).toBe(true);
      expect(container.find("Row").exists()).toBe(true);
      expect(container.find("Col").exists()).toBe(true);
    });

    it("should render header", () => {
      expect(wrapper.find(Container).exists()).toBe(true);
      expect(wrapper.find(ListGroup).exists()).toBe(true);
      const strong = wrapper.find("strong");
      expect(strong.at(0).text()).toEqual("Player");
      expect(strong.at(1).text()).toEqual("Position");
      expect(strong.at(2).text()).toEqual("Nationality");
      expect(strong.at(3).text()).toEqual("Age");
    });
  
    it("should render results", () => {

      expect(wrapper.find("Player").length).toBe(1);
      expect(wrapper.find("Alert").length).toBe(0);

    });
  
    it("should render no results", () => {

      wrapper.setProps({ rows: [] });
      expect(wrapper.find("Player").length).toBe(0);
      expect(wrapper.find("Alert").length).toBe(1);
    });
  });
 
});
