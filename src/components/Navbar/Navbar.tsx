"use client"

import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const handleDropdown = () => {
    const icon = document.getElementById("dropdownIcon");
    const navBar = document.getElementById("navBar");
    icon?.classList.toggle(styles.open);
    navBar?.classList.toggle(styles.expanded);
  }

  return (
    <nav
      id="navBar"
      className={styles.navBar}
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
            id="dropdownIcon"
            className={`${styles.dropdownIcon} ${styles.navItem}`}
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
}

export default Navbar;