import React from "react";
import Player from "../components/playersGrid/Player";
import { shallow } from "enzyme";

describe("<Player />", () => {
  let wrapper;

  const player = {
    name: "Guido",
    position: "Midfielder",
    nationality: "Arg",
    dateOfBirth: "1980-04-05"
  };

  beforeEach(() => {
    wrapper = shallow(<Player player={player} />);
  });

  it("renders with props", () => {
    const span = wrapper.find("span");
    expect(span.at(0).text()).toEqual("Guido");
    expect(span.at(1).text()).toEqual("Midfielder");
    expect(span.at(2).text()).toEqual("Arg");
    expect(span.at(3).text()).toEqual("38");
    //console.log(wrapper.debug());
  });
});
