import React from "react";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Calendar } from "../Calendar/Calendar";
import Styles from "./Layout.module.css";

export function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={Styles.container}>
        <Navbar />
        <Calendar />
      </main>
    </>
  );
}
