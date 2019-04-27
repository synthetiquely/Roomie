import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import { Timeslot } from "./Timeslot";
import { DEFAULT_TIMESLOT_WIDTH } from "../../services/time";

afterEach(cleanup);

it("renders a Timeslot of a single width", () => {
  const { container } = render(<Timeslot hourStart={8} hourEnd={9} />);
  let component = container.firstChild;

  expect(component.style.width).toEqual(`${DEFAULT_TIMESLOT_WIDTH}px`);
});

it("renders a Timeslot of a twice width", () => {
  let expectedWidth = DEFAULT_TIMESLOT_WIDTH * 2;

  const { container } = render(<Timeslot hourStart={8} hourEnd={10} />);
  let component = container.firstChild;

  expect(component.style.width).toEqual(`${expectedWidth}px`);
});

it("renders a Timeslot with a disabled button if it is occupied", () => {
  const { container } = render(<Timeslot hourStart={8} hourEnd={10} isOccupied />);
  let component = container.firstChild;

  expect(component.children[0]).toHaveAttribute("disabled");
});
