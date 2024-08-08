import styles from "./contactForm.module.scss";

export default function ContactForm() {
  return (
    <form action="" className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Message Title</label>
        <input id="title" name="title" type="text" placeholder="..." />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="subject">Course Subject</label>
        <select name="subject" id="subject">
          <option value="">Select a Subject</option>
          <option value="unit-1">Unit 1</option>
          <option value="unit-2">Unit 2</option>
          <option value="unit-3">Unit 3</option>
          <option value="unit-4">Unit 4</option>
        </select>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="..."
          rows={5}></textarea>
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
