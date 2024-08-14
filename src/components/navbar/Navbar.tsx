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
        <Link to={"/"} aria-label="home page link">
          <span className={styles.logo}>Equinim College</span>
        </Link>
        <button
          ref={mobileMenuButton}
          aria-expanded={menuOpen}
          aria-controls="mobile main navigation"
          aria-label={
            menuOpen ? "close navigation menu" : "open navigation menu"
          }
          onClick={() => {
            setMenuOpen((prev) => !prev);
            if (menuOpen) setOpenDropdowns([]);
          }}
          className={styles.mobile_menu_button}>
          {menuOpen ? (
            <img src={closeIcon} alt="close menu icon" />
          ) : (
            <img src={menuIcon} alt="open menu icon" />
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
              <li>
                <button className={styles.nav_item}>Events</button>
              </li>
              <li>
                <button className={styles.nav_item}>Community</button>
              </li>
            </Dropdown>
            <Dropdown
              name={"Account"}
              icon={accountIcon}
              isOpen={openDropdowns.includes("Account")}
              toggleDropdown={() => toggleDropdown("Account")}>
              <li>
                <button className={styles.nav_item}>My Account</button>
              </li>
              <li>
                <button className={styles.nav_item}>Messages</button>
              </li>
              <li>
                <button className={styles.nav_item}>Invoices</button>
              </li>
              <li>
                <button className={styles.nav_item}>Log Out</button>
              </li>
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

  // dropdown menu click behaviour
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isMobile = window.innerWidth <= 768;

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

  // auto mob menu dropdown item focus on open
  useEffect(() => {
    if (isOpen) {
      const firstChild = dropdownRef.current?.querySelector("button");
      firstChild?.focus();
    }
  }, [isOpen]);

  // set tab index for dropdowns
  useEffect(() => {
    const dropdownItems = dropdownRef.current?.querySelectorAll("li > button");

    if (isOpen) {
      dropdownItems.forEach((item: HTMLElement) => {
        item.setAttribute("tabindex", "0");
      });
    } else {
      dropdownItems.forEach((item: HTMLElement) => {
        item.setAttribute("tabindex", "1");
      });
    }
  }, [isOpen]);

  return (
    <div className={styles.dropdown_container}>
      <li>
        <button
          onClick={toggleDropdown}
          aria-label={isOpen ? `close ${name}` : `open ${name}`}
          aria-controls={`${name} dropdown menu`}
          aria-expanded={isOpen}
          className={`${styles.dropdown_btn} ${styles.nav_item}`}
          ref={buttonRef}>
          {icon && <img src={icon} alt="" />}
          {name} &darr;
        </button>
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
