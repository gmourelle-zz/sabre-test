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
    wrapper = shallow(<PlayersGrid rows={[]} />);
  });

  it("should renders header", () => {
    expect(wrapper.find(Container).exists()).toBe(true);
    expect(wrapper.find(ListGroup).exists()).toBe(true);
    const strong = wrapper.find("strong");
    expect(strong.at(0).text()).toEqual("Player");
    expect(strong.at(1).text()).toEqual("Position");
    expect(strong.at(2).text()).toEqual("Nationality");
    expect(strong.at(3).text()).toEqual("Age");
  });

  it("should renders no results", () => {
    expect(wrapper.contains(<Alert />));
  });

  it("should renders results", () => {
    //expect(wrapper.is(Alert)).toBe(true);
    //const wrapper2 = shallow(<PlayersGrid rows={player} />);

    wrapper.setProps({ rows: [] });
    //wrapper= shallow()
    expect(wrapper.contains(<Player />));
    //console.log(wrapper.debug());
  });
});
