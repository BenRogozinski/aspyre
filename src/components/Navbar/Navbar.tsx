"use client"

import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const mobile = useMediaQuery({ maxWidth: 800 });

  return (
    <nav className={styles.navBar} suppressHydrationWarning>
      <div className={`${styles.navGroup} ${styles.navGroupLeft}`}>
        <Link
          href={"/"}
          className={styles.navItem}
        >
          <Image
            src="/aspyre.svg"
            alt="Aspyre logo"
            width={36}
            height={40}
            priority
          />
        </Link>
        <div className={styles.navDivider}></div>
        <Link
          href={"/myInfo"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          My Info
        </Link>
        <Link
          href={"/schedule"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          Schedule
        </Link>
        <Link
          href={"/classes"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          Classes
        </Link>
        <Link
          href={"/tools"}
          className={`${styles.navItem} ${styles.hoverUnderline}`}
        >
          Tools
        </Link>
      </div>
      <div className={styles.navGroup}>
        <Link className={styles.navItem} href={"#"}>
          {mobile ? "MOBILE" : "DESKTOP"}
        </Link>
        <a className={styles.navItem}>
          <Image
            src="/aspyre.svg"
            alt="Aspyre logo"
            width={36}
            height={40}
            priority
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;