import React from "react";
import PropTypes from "prop-types";
import Styles from "./Room.module.css";

export function Room() {
  return <li className={Styles.container}>Room</li>;
}

Room.propTypes = {
  title: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  floor: PropTypes.number.isRequired,
};
