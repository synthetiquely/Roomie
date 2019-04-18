import React from "react";
import { Hour } from "../Hour/Hour";
import Styles from "./Timeline.module.css";

let hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];

export function Timeline() {
  return (
    <ul className={Styles.container}>
      {hours.map(hour => (
        <Hour key={hour} time={hour} />
      ))}
    </ul>
  );
}
