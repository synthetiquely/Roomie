import React from "react";
import PropTypes from "prop-types";
import Styles from "./Hour.module.css";

export function Hour({ time }) {
  return (
    <li className={Styles.container}>
      <span className={Styles.text}>{time}</span>
    </li>
  );
}

Hour.propTypes = {
  time: PropTypes.string.isRequired,
};
