import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import { Timeslots } from "./Timeslots";
import { MAX_HOURS } from "../../services/time";

afterEach(cleanup);

it("renders a Timeslots component with no events", () => {
  render(<Timeslots room="test-room-1" events={[]} />);

  expect(document.querySelectorAll("li")).toHaveLength(MAX_HOURS);
});
