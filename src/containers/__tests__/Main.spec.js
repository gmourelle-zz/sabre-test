import React from "react";
import Main from "../Main";
import { shallow } from "enzyme";
import FilterBar from "../../components/filterBar/FilterBar";
import PlayersGrid from "../../components/playersGrid/PlayersGrid";
import { Row, Col } from "reactstrap";
import { getPlayers, filterPlayers } from "../../actions";



describe("<Main />", () => {
  let wrapper, getPlayers;
  const player = {
    name: "Guido",
    position: "Midfielder",
    nationality: "Arg",
    dateOfBirth: "1980-04-05"
  };

  beforeEach(() => {
    wrapper = shallow(<Main />);
    getPlayers = jest.fn();

  });

  describe("render", () => {
    it('renders without crashing, calls `getPlayers` and has correct className', () => {
     expect(getPlayers.mock.calls.length).toBe(1);
      // expect(
      //   wrapper.contains([
      //     <Col xs="12">
      //     <Row className="filter-container">
      //       <FilterBar onSearch={filterPlayers} />
      //     </Row>
      //     <Row>
      //       <PlayersGrid rows={players} />
      //     </Row>
      //   </Col>
      //   ])
      // );
    });
  
    // it("should display Row with Columns", () => {
    //   const wrapper2 = shallow(<Main />);

    //   //   expect(wrapper.find("Row").exists()).toBe(true);
    //   //   expect(wrapper.find("Col").exists()).toBe(true);
    //   console.log(wrapper2.debug());
    // });
  });
});
