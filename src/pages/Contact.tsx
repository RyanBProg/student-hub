import ContactForm from "../components/form/ContactForm";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact_page}>
      <h1>Ask a Question</h1>
      <div className={styles.details}>
        <div className={styles.details_title}>
          <h2>Your Details</h2>
          <button>Update Details</button>
        </div>
        <ul>
          <li>
            <p>Name</p>
            <p>Ryan Bowler</p>
          </li>
          <li>
            <p>Email</p>
            <p>ryan.bowler96@gmail.com</p>
          </li>
          <li>
            <p>College ID</p>
            <p>2938743</p>
          </li>
          <li>
            <p>Address</p>
            <p>24 Brick Street</p>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.contact_title}>
          <h2>How Can We Help?</h2>
          <p>
            Send us any study related or administrative queries you may have
            about your course.
          </p>
        </div>
        <ContactForm />
        <p className={styles.contact_info}>
          Your message will be sent as an email to the College. Please check
          your email for a reply within 1 - 3 working days. You can also contact
          the College on 1300 880 885 Mon- Fri 9am-5pm AEDT/AEST
        </p>
      </div>
    </div>
  );
}
