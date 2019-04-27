import React from "react";
import PropTypes from "prop-types";
import Styles from "./Room.module.css";

export function Room({ title, occupancy }) {
  return (
    <li className={Styles.container}>
      <h3 className={Styles.title}>{title}</h3>
      <span className={Styles.occupancy}>до {occupancy} человек</span>
    </li>
  );
}

Room.propTypes = {
  title: PropTypes.string.isRequired,
  occupancy: PropTypes.number.isRequired,
  floor: PropTypes.number.isRequired,
};
