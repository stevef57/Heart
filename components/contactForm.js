import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Form.module.scss";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mlezzwjy");

  if (state.succeeded) {
    return (
      <div className={styles.thanks}>
        <p className={styles.thanksWords}>
          Thanks for your submission. We will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input
        placeholder="Email"
        className={styles.emailInput}
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        placeholder="Include name and phone number. ex: (555) 555-5555"
        className={styles.textArea}
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className={styles.button}
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
