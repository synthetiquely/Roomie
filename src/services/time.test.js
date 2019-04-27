import { getHour, generateSlots, MAX_HOURS, START_HOUR, END_HOUR } from "./time";

it("should return an hour of a given date", () => {
  let date = new Date("2019-04-27:05:33");

  let result = getHour(date);

  expect(result).toEqual(5);
});

it("should generate an array with objects that describes timeslots", () => {
  let slots = generateSlots();

  expect(slots).toHaveLength(MAX_HOURS);
  expect(slots[0]).toEqual({
    hourStart: START_HOUR,
    hourEnd: START_HOUR + 1,
  });
  expect(slots[slots.length - 1]).toEqual({
    hourStart: END_HOUR - 1,
    hourEnd: END_HOUR,
  });
});
