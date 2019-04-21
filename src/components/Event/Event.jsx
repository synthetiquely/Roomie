import React from "react";
import PropTypes from "prop-types";
import { Timeslot } from "../Timeslot/Timeslot";

export function Event() {
  return <Timeslot />;
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  dateStart: PropTypes.instanceOf(Date).isRequired,
  dateEnd: PropTypes.instanceOf(Date).isRequired,
  room: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.string),
};

Event.defaultTypes = {
  users: [],
};
