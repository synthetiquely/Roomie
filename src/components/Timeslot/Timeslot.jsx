import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { MAX_HOURS } from "../../services/time";
import Styles from "./Timeslot.module.css";

export function Timeslot({ hourStart, hourEnd, isOccupied }) {
  let diff = 1;
  let width = 100 / MAX_HOURS;

  if (hourStart && hourEnd) {
    diff = hourEnd - hourStart;
    width = width * diff;
  }
 
  return (
    <li style={{ width: `${width}%` }} className={Styles.container}>
      <button disabled={isOccupied} className={classnames(Styles.slot, { [Styles["slot--occupied"]]: isOccupied })} />
    </li>
  );
}

Timeslot.propTypes = {
  isOccupied: PropTypes.bool,
  hourStart: PropTypes.number.isRequired,
  hourEnd: PropTypes.number.isRequired,
};

Timeslot.defaultProps = {
  isOccupied: false,
};
