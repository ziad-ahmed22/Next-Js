"use client ";

import styles from "./ThemeButton.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

export const ThemeButton = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className={styles.themeContainer} onClick={toggleMode}>
      <span className={styles.dark}>⚫</span>
      <span className={styles.light}>⚪</span>
      <span
        className={styles.over}
        style={mode === "dark" ? { left: "0" } : { left: "calc(100% - 26px)" }}
      />
    </div>
  );
};
