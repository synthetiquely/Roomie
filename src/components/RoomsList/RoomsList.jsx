import React from "react";
import { Room } from "../Room/Room";
import Styles from "./RoomsList.module.css";

export function RoomsList() {
  return (
    <ul className={Styles.container}>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </ul>
  );
}
