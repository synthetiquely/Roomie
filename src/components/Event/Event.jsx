import React from "react";
import PropTypes from "prop-types";
import Styles from "./Event.module.css";

export function Event({ id }) {
  return <main className={Styles.container}>Event Page {id}</main>;
}

Event.propTypes = {
  id: PropTypes.string.isRequired,
};
