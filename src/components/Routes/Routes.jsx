import React from "react";
import { Router } from "@reach/router";
import { Header } from "../Header/Header";
import { Dashboard } from "../Dashboard/Dashboard";
import { CreateEvent } from "../CreateEvent/CreateEvent";
import { Event } from "../Event/Event";
import Styles from "./Routes.module.css";

export function Routes() {
  return (
    <>
      <Header />
      <Router className={Styles.container}>
        <Dashboard path="/" />
        <CreateEvent path="/event/new" />
        <Event path="/event/:id" />
      </Router>
    </>
  );
}
