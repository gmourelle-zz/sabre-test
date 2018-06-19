import React from "react";
import FilterBar from "../FilterBar";
import { shallow } from "enzyme";
import POSITIONS from "../../../constants/positions";

const player = {
  name: "Guido",
  position: "Midfielder",
  age: "19"
};

describe("<FilterBar />", () => {
  let wrapper;
  let onSearchSpy;
  let instance;

  beforeEach(() => {
    onSearchSpy = jest.fn();
    wrapper = shallow(<FilterBar onSearch={onSearchSpy} />);
    instance = wrapper.instance();
  });

  describe("render", () => {
    it("should display Container with filter__container", () => {
      const container = wrapper.find("Container.filter__container");
      expect(container.exists()).toBe(true);
      expect(container.find("FormGroup.filter__formgroup").exists()).toBe(true);
    });

    it("should display Row with Columns", () => {
      const container = wrapper.find("Container");
      expect(container.exists()).toBe(true);
      expect(container.find("Row").exists()).toBe(true);
      expect(container.find("Col").exists()).toBe(true);
    });

    describe("name filter", () => {
      it("should render with name, id, placeholder", () => {
        const nameInput = wrapper.find('Input[name="name"]');

        expect(nameInput.exists()).toBe(true);
        expect(nameInput.props()).toEqual(
          expect.objectContaining({
            onChange: instance.handleChange,
            onKeyPress: instance.onKeyPress,
            type: "text",
            name: "name",
            id: "name",
            placeholder: "Name"
          })
        );
      });

      it("should render with state.name", () => {
        wrapper.setState({ name: "pedro" });
        const nameInput = wrapper.find('Input[name="name"]');

        expect(nameInput.prop("value")).toBe("pedro");
      });
    });

    describe("position filter", () => {
      it("should display position filter", () => {
        const positionInput = wrapper.find('Input[name="position"]');

        expect(positionInput.exists()).toBe(true);
        expect(positionInput.props()).toEqual(
          expect.objectContaining({
            onChange: instance.handleChange,
            type: "select",
            name: "position",
            id: "position"
          })
        );
      });

      it("should render with state.position", () => {
        wrapper.setState({ position: "Midfielder" });
        const positionInput = wrapper.find('Input[name="position"]');

        expect(positionInput.prop("value")).toBe("Midfielder");
      });
    });

    describe("age filter", () => {
      it("should display age filter", () => {
        const ageInput = wrapper.find('Input[name="age"]');

        expect(ageInput.exists()).toBe(true);
        expect(ageInput.props()).toEqual(
          expect.objectContaining({
            onChange: instance.handleChange,
            type: "number",
            name: "age",
            id: "age",
            placeholder: "Age",
            min: "18",
            max: "40"
          })
        );
      });

      it("should render with state.age", () => {
        wrapper.setState({ age: "38" });
        const ageInput = wrapper.find('Input[name="age"]');

        expect(ageInput.prop("value")).toBe("38");
      });
    });

    describe("search button", () => {
      it("should display button", () => {
        const button = wrapper.find("Button");

        expect(button.exists()).toBe(true);
        expect(button.find("Button.float-left").exists()).toBe(true);
        expect(button.find("Button.search-button").exists()).toBe(true);
        expect(button.props()).toEqual(
          expect.objectContaining({
            onClick: instance.handleSubmit,
            color: "primary"
          })
        );
      });
    });
  });

  describe("inner functions", () => {
    it("handleSubmit should preventDefault and call onSearch", () => {
      wrapper.setState(player);

      const event = {
        preventDefault: jest.fn()
      };
      instance.handleSubmit(event);

      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(event.preventDefault).toHaveBeenCalledWith();

      expect(onSearchSpy).toHaveBeenCalledTimes(1);
      expect(onSearchSpy).toHaveBeenCalledWith(player);
    });

    it("handleChange should update state with name and value from event", () => {
      const event = {
        target: {
          name: "a",
          value: "b"
        }
      };

      instance.handleChange(event);
      expect(wrapper.state("a")).toBe("b");
    });
  });
});
