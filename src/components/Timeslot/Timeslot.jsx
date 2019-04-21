import React from "react";
import PropTypes from "prop-types";
import Styles from "./Timeslot.module.css";

export function Timeslot() {
  return <li className={Styles.container} />;
}

Timeslot.propTypes = {
  isOccupied: PropTypes.bool,
};

Timeslot.defaultProps = {
  isOccupied: false,
};
