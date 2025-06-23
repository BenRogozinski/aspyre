"use client"

import * as React from "react";
import styles from "./DashboardBasePage.module.css";
import Navbar from "../Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8e2b9b",
    },
    secondary: {
      main: "#3f5efb",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#0000005f",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root:last-child td, & .MuiTableRow-root:last-child th': {
            border: 0,
          },
        },
      },
    },
  },
});

type BasePageProps = {
  children: React.ReactNode;
}

const BasePage = ({ children }: BasePageProps) => {
  return (
    <div className={styles.basePage}>
      <Navbar />
      <div className={styles.content}>
        <ThemeProvider theme={theme}>
          { children }
        </ThemeProvider>
      </div>
    </div>
  );
}

export default BasePage;