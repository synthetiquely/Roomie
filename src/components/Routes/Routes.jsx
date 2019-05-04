import React, { Suspense, lazy } from "react";
import { Router } from "@reach/router";
import { Header } from "../Header/Header";
import Styles from "./Routes.module.css";

const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const CreateEvent = lazy(() => import("../CreateEvent/CreateEvent"));
const Event = lazy(() => import("../Event/Event"));

export function Routes() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Router className={Styles.container}>
          <Dashboard path="/" />
          <CreateEvent path="/event/new" />
          <Event path="/event/:id" />
        </Router>
      </Suspense>
    </>
  );
}
