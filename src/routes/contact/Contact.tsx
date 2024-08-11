import ContactForm from "../../components/form/ContactForm";
import styles from "./contact.module.scss";
import mailIcon from "/icons/mail.png";
import profileIcon from "/icons/user.png";
import idIcon from "/icons/id-card.png";
import houseIcon from "/icons/home.png";
import airplaneIcon from "/icons/paper-airplane.png";

export default function Contact() {
  return (
    <div className={styles.contact_page}>
      <div className={styles.details_container}>
        <div className={styles.title_container}>
          <img src={airplaneIcon} alt="airplane icon" />
          <h1>Ask a Question</h1>
          <img src={airplaneIcon} alt="airplane icon" />
        </div>
        <div className={styles.details}>
          <div className={styles.details_title}>
            <h2>Your Details</h2>
            <button>Update Details</button>
          </div>
          <ul>
            <li>
              <div>
                <img src={profileIcon} alt="profile icon" />
                <p>Name</p>
              </div>
              <p>Ryan Bowler</p>
            </li>
            <li>
              <div>
                <img src={mailIcon} alt="mail icon" />
                <p>Email</p>
              </div>
              <p>ryan.bowler96@gmail.com</p>
            </li>
            <li>
              <div>
                <img src={idIcon} alt="id icon" />
                <p>College ID</p>
              </div>
              <p>2938743</p>
            </li>
            <li>
              <div>
                <img src={houseIcon} alt="home icon" />
                <p>Address</p>
              </div>
              <p>24 Brick Street</p>
            </li>
          </ul>
        </div>
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
