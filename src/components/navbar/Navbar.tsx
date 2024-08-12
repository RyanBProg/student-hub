import styles from "./navbar.module.scss";
import { useState, useEffect, useRef, ReactNode } from "react";
import accountIcon from "/icons/user.png";
import menuIcon from "/icons/menu.png";
import closeIcon from "/icons/cross.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.top_nav}>
      <header>
        <Link to={"/"}>
          <span className={styles.logo}>Equinium College</span>
        </Link>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className={styles.mobile_menu_button}>
          {menuOpen ? (
            <img src={closeIcon} alt="close menu icon" />
          ) : (
            <img src={menuIcon} alt="menu icon" />
          )}
        </button>
        <nav
          className={`${styles.nav_menu} ${
            menuOpen ? styles.mobile_nav_open : ""
          }
            `}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <Link to={"/"}>Hub</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to={"/news"}>News</Link>
            </li>
            <li className={styles.nav_item}>
              <Link to={"/timetable"}>Timetable</Link>
            </li>
            <Dropdown name={"Social"}>
              <li className={styles.nav_item}>Events</li>
              <li className={styles.nav_item}>Community</li>
            </Dropdown>
            <Dropdown name={"Account"} icon={accountIcon}>
              <li className={styles.nav_item}>My Account</li>
              <li className={styles.nav_item}>Messages</li>
              <li className={styles.nav_item}>Invoices</li>
              <li className={styles.nav_item}>Log Out</li>
            </Dropdown>
          </ul>
        </nav>
      </header>
    </div>
  );
}

type DropdownProps = {
  children: ReactNode[];
  name: string;
  icon: string;
  css: string;
};

function Dropdown({ children, name, icon = "", css = "" }: DropdownProps) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (buttonRef.current && buttonRef.current.contains(event.target)) {
      return;
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownIsOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownIsOpen]);

  return (
    <div className={styles.dropdown_container}>
      <li
        onClick={() => setDropdownIsOpen((prev) => !prev)}
        className={`${styles.dropdown_btn} ${styles.nav_item}`}
        ref={buttonRef}>
        {icon && <img src={icon} alt="nav icon" />}
        {name} &darr;
      </li>
      <ul
        className={`${styles.dropdown_list} ${
          dropdownIsOpen ? styles.dropdown_list_open : ""
        } ${css}`}
        ref={dropdownRef}>
        {children}
      </ul>
    </div>
  );
}
