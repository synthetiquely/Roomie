import React from "react";
import PropTypes from "prop-types";
import { Timeslot } from "../Timeslot/Timeslot";
import { getHour, generateSlots, MAX_HOURS } from "../../services/time";
import Styles from "./Timeslots.module.css";

let slots = generateSlots();

function renderEvents(events) {
  let count = MAX_HOURS;

  return slots.reduce((timeslots, slot, index) => {
    if (count === 0) {
      return timeslots;
    }

    let event = events.find(event => getHour(event.dateStart) === slot.hourStart);

    if (event) {
      let endHour = getHour(event.dateEnd);
      let startHour = getHour(event.dateStart);
      let diff = endHour - startHour;
      count = count - diff;

      timeslots.push(<Timeslot key={event.id} hourStart={startHour} hourEnd={endHour} isOccupied />);
    } else {
      count = count - 1;

      timeslots.push(<Timeslot key={index} hourStart={slot.hourStart} hourEnd={slot.hourEnd} />);
    }

    return timeslots;
  }, []);
}

export function Timeslots({ events }) {
  return <ul className={Styles.container}>{renderEvents(events)}</ul>;
}

Timeslots.propTypes = {
  room: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dateStart: PropTypes.instanceOf(Date).isRequired,
      dateEnd: PropTypes.instanceOf(Date).isRequired,
      room: PropTypes.string.isRequired,
      users: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};
