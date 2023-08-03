import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p7ljfmb",
        "template_89nfhpb",
        form.current,
        "LT5Yf1msugDnabMMx"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h1 className="compTitle">Contact Me</h1>
      <p id="contactText">
        If you have any questions, or just want to be friends, please fill out
        the form below and I will get back to you as soon as possible.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label className="conLabel">Name</label>
        <input type="text" name="user_name" placeholder="Name" />
        <label className="conLabel">Email</label>
        <input type="email" name="user_email" placeholder="Email" />
        <label className="conLabel">Message</label>
        <textarea
          id="contMessage"
          name="message"
          placeholder="How Can I assist you?"
        />
        <input className="sendBtn" type="submit" value="Send" />
      </form>
    </div>
  );
}
