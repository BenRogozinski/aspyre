"use client"

import { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav
      className={`${styles.navBar} ${isDropdownOpen ? styles.expanded : ""}`}
      suppressHydrationWarning
    >
      <div className={`${styles.navGroup} ${styles.navGroupLeft}`}>
        <div className={styles.topAlignmentContainer}>
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
          <Image
            className={`${styles.dropdownIcon} ${styles.navItem} ${isDropdownOpen ? styles.open : ""}`}
            src="/expand.svg"
            alt=""
            width={30}
            height={30}
            onClick={handleDropdown}
            priority
          />
        </div>
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
      <div className={`${styles.navGroup} ${styles.navGroupRight}`}>
        <Link className={styles.navItem} href={"#"}>
          Doe, John
        </Link>
        <a className={styles.navItem}>
          <Image
            src="/aspyre.svg"
            alt="Profile picture"
            width={36}
            height={40}
            priority
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;