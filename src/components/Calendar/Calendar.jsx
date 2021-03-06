import React from "react";
import { Timeslots } from "../Timeslots/Timeslots";
import { ROOMS } from "../../mock/rooms";
import { EVENTS } from "../../mock/events";
import Styles from "./Calendar.module.css";

export function Calendar() {
  return (
    <section className={Styles.container}>
      {ROOMS.map(room => (
        <Timeslots key={room.id} room={room.id} events={EVENTS[room.id] || []} />
      ))}
    </section>
  );
}
