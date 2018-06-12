import React from "react";
import Player from "../components/playersGrid/Player";
import { shallow } from "enzyme";
import { Row,  Col } from "reactstrap";


describe("<Player />", () => {
  let wrapper;

  const player = {
    name: "Guido",
    position: "Midfielder",
    nationality: "Arg",
    dateOfBirth: "1980-04-05"
  };

  beforeEach(() => {
    wrapper = shallow(<Player key={0} player={player} />);
  });

  it("should render each player", () => {
    expect(wrapper.find(Row).exists()).toBe(true);
    expect(wrapper.find('#player-name').text()).toBe('Guido');
  });
});
