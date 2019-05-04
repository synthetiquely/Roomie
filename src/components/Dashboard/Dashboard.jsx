import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Calendar } from "../Calendar/Calendar";
import Styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={Styles.container}>
      <Sidebar />
      <div className={Styles.day} />
      <Navbar />
      <Calendar />
    </main>
  );
}
