import { useState, useEffect, useRef, ReactNode } from "react";
import styles from "./navbar.module.scss";
import accountIcon from "/icons/user.png";
import menuIcon from "/icons/menu.png";
import closeIcon from "/icons/cross.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const navRef = useRef(null);
  const mobileMenuButton = useRef(null);

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (
      mobileMenuButton.current &&
      (mobileMenuButton.current as HTMLElement).contains(event.target as Node)
    ) {
      return;
    }
    if (
      navRef.current &&
      !(navRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setMenuOpen(false);
      setOpenDropdowns([]);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutsideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [menuOpen]);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name)
        ? prev.filter((dropdown) => dropdown !== name)
        : [...prev, name]
    );
  };

  return (
    <div className={styles.top_nav}>
      <header>
        <Link to={"/"}>
          <span className={styles.logo}>Equinium College</span>
        </Link>
        <button
          ref={mobileMenuButton}
          onClick={() => {
            setMenuOpen((prev) => !prev);
            if (menuOpen) setOpenDropdowns([]);
          }}
          className={styles.mobile_menu_button}>
          {menuOpen ? (
            <img src={closeIcon} alt="close menu icon" />
          ) : (
            <img src={menuIcon} alt="menu icon" />
          )}
        </button>
        <nav
          ref={navRef}
          className={`${styles.nav_menu} ${
            menuOpen ? styles.mobile_nav_open : ""
          }`}>
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
            <Dropdown
              name={"Social"}
              isOpen={openDropdowns.includes("Social")}
              toggleDropdown={() => toggleDropdown("Social")}>
              <li className={styles.nav_item}>Events</li>
              <li className={styles.nav_item}>Community</li>
            </Dropdown>
            <Dropdown
              name={"Account"}
              icon={accountIcon}
              isOpen={openDropdowns.includes("Account")}
              toggleDropdown={() => toggleDropdown("Account")}>
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
  icon?: string;
  isOpen: boolean;
  toggleDropdown: () => void;
};

function Dropdown({
  children,
  name,
  icon = "",
  isOpen,
  toggleDropdown,
}: DropdownProps) {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Get the window's width
      const isMobile = window.innerWidth <= 768;

      // Only close the dropdown if it's not a mobile screen
      if (!isMobile) {
        if (
          buttonRef.current &&
          (buttonRef.current as HTMLElement).contains(event.target as Node)
        ) {
          return;
        }
        if (
          dropdownRef.current &&
          !(dropdownRef.current as HTMLElement).contains(event.target as Node)
        ) {
          toggleDropdown();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <div className={styles.dropdown_container}>
      <li
        onClick={toggleDropdown}
        className={`${styles.dropdown_btn} ${styles.nav_item}`}
        ref={buttonRef}>
        {icon && <img src={icon} alt="nav icon" />}
        {name} &darr;
      </li>
      <ul
        className={`${styles.dropdown_list} ${
          isOpen ? styles.dropdown_list_open : ""
        }`}
        ref={dropdownRef}>
        {children}
      </ul>
    </div>
  );
}
