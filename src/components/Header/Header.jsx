import React from "react";
import { Link } from "@reach/router";
import Styles from "./Header.module.css";
export function Header() {
  return (
    <header className={Styles.container}>
      <Link to="/event/new">Создать встречу</Link>
    </header>
  );
}
