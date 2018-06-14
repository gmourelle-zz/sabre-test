import React from "react";
import FilterBar from "../components/filterBar/FilterBar";
import { Input, ListGroup, Alert } from "reactstrap";
import { shallow } from "enzyme";

describe("<FilterBar />", () => {
  let wrapper;

  const player = {
    name: "Guido",
    position: "Midfielder",
    nationality: "Arg",
    dateOfBirth: "1980-04-05"
  };

  beforeEach(() => {
    wrapper = shallow(<FilterBar />);
  });

  it("name input", () => {
    const input = wrapper.find('[name="name"]');

    expect(input.length).toBe(1);
    input.simulate("change", { target: { name: "name", value: "prueba" } });
    expect(wrapper.state("name")).toEqual("prueba");
  });
});
