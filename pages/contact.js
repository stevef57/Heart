import ContactForm from "../components/contactForm";
import Head from "next/head";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact us for questions and quotes"
        />
      </Head>
      <div className={styles.white}>
        <div className={styles.contactSection}>
          <div className={styles.formContainer}>
            <div className={styles.shadow}>
              <h1 className={styles.header}>Contact Us</h1>
              <div className={styles.contactFormBack}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
