import React from "react";
import PlayersGrid from "../components/playersGrid/PlayersGrid";
import { shallow } from "enzyme";
import { Col } from "reactstrap";

describe("<PlayersGrid />", () => {
  let wrapper;
  const player = {
    name: "Guido",
    position: "Midfielder",
    nationality: "Arg",
    dateOfBirth: "1980-04-05"
  };

  beforeEach(() => {
    wrapper = shallow(<PlayersGrid rows={player} />);
  });

  it("should render list of player", () => {
    //const playerGrid = wrapper.find(Col).at(0);
    // expect(playerGrid.exists().toBe(true));
    //console.log(wrapper.debug());
  });
});
