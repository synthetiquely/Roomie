export const MAX_HOURS = 15;
export const START_HOUR = 8;
export const END_HOUR = MAX_HOURS + START_HOUR;

export const DEFAULT_TIMESLOT_WIDTH = 70;

/**
 *
 * @param {Date} date
 */
export function getHour(date) {
  return date.getHours();
}

export function generateSlots() {
  return Array.apply(null, Array(MAX_HOURS)).map((_, index) => {
    return {
      hourStart: START_HOUR + index,
      hourEnd: START_HOUR + 1 + index,
    };
  });
}
