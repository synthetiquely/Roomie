import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { DEFAULT_TIMESLOT_WIDTH } from "../../services/time";
import Styles from "./Timeslot.module.css";

export function Timeslot({ hourStart, hourEnd, isOccupied }) {
  let diff = 1;
  let width = DEFAULT_TIMESLOT_WIDTH;

  if (hourStart && hourEnd) {
    diff = hourEnd - hourStart;
    width = width * diff;
  }

  return (
    <li style={{ width }} className={Styles.container}>
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
