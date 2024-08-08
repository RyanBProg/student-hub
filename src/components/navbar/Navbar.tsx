import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.top_nav}>
      <p className={styles.logo}>Equinium College</p>
      <nav>
        <ul>
          <li>Home</li>
          <li>Hub</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
