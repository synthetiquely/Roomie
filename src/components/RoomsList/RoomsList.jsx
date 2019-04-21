import React from "react";
import { Room } from "../Room/Room";
import { ROOMS } from "../../mock/rooms";
import Styles from "./RoomsList.module.css";

export function RoomsList() {
  return (
    <ul className={Styles.container}>
      {ROOMS.map(room => (
        <Room key={room.id} />
      ))}
    </ul>
  );
}
