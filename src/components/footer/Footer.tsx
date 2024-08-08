import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.nav_container}>
        <p className={styles.logo}>Equinium College</p>
        <ul>
          <li>Home</li>
          <li>Hub</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Priacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <p className={styles.copyright}>Copyright Equinium College 2019</p>
    </footer>
  );
}
