import React from "react";
import { RoomsList } from "../RoomsList/RoomsList";
import Styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={Styles.container}>
      <RoomsList />
    </aside>
  );
}
