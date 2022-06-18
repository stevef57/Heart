import React, { useRef, useState } from "react";
import styles from "../styles/Footer.module.scss";

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("THANK YOU FOR SUBSCRIBING");
  };

  return (
    <div className={styles.subContainer}>
      <div className={styles.subTitle}>
        {message ? message : `Subscribe for news and updates`}
      </div>

      <form className={styles.subForm} onSubmit={subscribe}>
        {/* <label className={styles.subAlert} htmlFor="email-input">
          {""}
        </label> */}
        <input
          className={styles.subEmail}
          id="email-input"
          name="email"
          placeholder="@gmail.com"
          ref={inputEl}
          required
          type="email"
        />
        <button className={styles.subButton} type="submit">
          {"Subscribe"}
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
