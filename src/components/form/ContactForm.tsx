import styles from "./contactForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

type TFormInput = {
  title: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();
  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    // submit data to back end
    console.log(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Message Title</label>
        <input
          id="title"
          type="text"
          placeholder="..."
          {...register("title", { required: "Field is required!" })}
        />
        {errors.title && (
          <p className={styles.error} role="alert">
            {errors.title.message}
          </p>
        )}
      </div>
      <div className={styles.input_container}>
        <label htmlFor="subject">Course Subject</label>
        <select
          id="subject"
          {...register("subject", { required: "Field is required!" })}>
          <option value="">Select a Subject</option>
          <option value="unit-1">Unit 1</option>
          <option value="unit-2">Unit 2</option>
          <option value="unit-3">Unit 3</option>
          <option value="unit-4">Unit 4</option>
        </select>
        {errors.subject && (
          <p className={styles.error} role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>
      <div className={styles.input_container}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="..."
          {...register("message", { required: "Field is required!" })}
          rows={5}></textarea>
        {errors.message && (
          <p className={styles.error} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
