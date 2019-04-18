import React from "react";
import { Timeline } from "../Timeline/Timeline";
import Styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={Styles.container}>
      <Timeline />
    </nav>
  );
}
