import React from "react";
import styles from "./BasePage.module.css";
import Navbar from "../Navbar/Navbar";

type BasePageProps = {
  children: React.ReactNode
}

const BasePage = ({ children }: BasePageProps) => {

  return (
    <div className={styles.basePage}>
      <Navbar />
      <div className={styles.content}>
        { children }
      </div>
    </div>
  );
}

export default BasePage;