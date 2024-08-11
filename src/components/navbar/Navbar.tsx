import styles from "./navbar.module.scss";
import { useState, useEffect, useRef, ReactNode } from "react";
import accountIcon from "/icons/user.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className={styles.top_nav}>
      <Link to={"/"}>
        <span className={styles.logo}>Equinium College</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Hub</Link>
          </li>
          <li>
            <Link to={"/news"}>News</Link>
          </li>
          <li>
            <Link to={"/timetable"}>Timetable</Link>
          </li>
          <Dropdown name={"Social"}>
            <li>Events</li>
            <li>Community</li>
          </Dropdown>
          <Dropdown
            name={"Account"}
            icon={accountIcon}
            css={styles.dropdown_account}>
            <li>My Account</li>
            <li>Messages</li>
            <li>Invoices</li>
            <li>Log Out</li>
          </Dropdown>
        </ul>
      </nav>
    </header>
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
    <div>
      <li
        onClick={() => setDropdownIsOpen((prev) => !prev)}
        className={styles.account_btn}
        ref={buttonRef}>
        {icon && <img src={icon} alt="nav icon" />}
        {name} &darr;
      </li>
      <ul
        className={`${styles.dropdown} ${
          dropdownIsOpen && styles.dropdown_open
        } ${css}`}
        ref={dropdownRef}>
        {children}
      </ul>
    </div>
  );
}
