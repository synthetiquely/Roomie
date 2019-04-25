import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Styles from "./Timeslot.module.css";

export function Timeslot({ isOccupied }) {
  return (
    <li className={Styles.container}>
      <button disabled={isOccupied} className={classnames(Styles.slot, { [Styles["slot--occupied"]]: isOccupied })} />
    </li>
  );
}

Timeslot.propTypes = {
  isOccupied: PropTypes.bool,
};

Timeslot.defaultProps = {
  isOccupied: false,
};
