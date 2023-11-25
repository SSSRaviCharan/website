import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import { FaFileDownload } from "react-icons/fa";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     form.current,
    //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log("message sent");
    //     },
    //     (error) => {
    //       console.log("failed");
    //     }
    //   );

    if (!(form.user_name && form.user_email && form.message)) {
      alert("Something went wrong!");
      return;
    }

    alert(`Thanks ${form.user_name}, I will shortly connect with you!`);
    // axios.post("https://formspree.io/f/mnqwzopy", form, {
    //   Accept: "application/json",
    // });
  };

  return (
    <div id="contact">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h1>Contact Me</h1>
        <input
          type="text"
          id="name-input"
          name="user_name"
          placeholder="Name"
          required
        />
        <br />
        <input
          type="email"
          id="email-input"
          name="user_email"
          placeholder="Email"
          required
        />
        <br />
        <textarea
          id="massage-input"
          name="message"
          placeholder="Message"
          required
        />
        <br />
        <input type="submit" value="Send" />
      </form>
      <div id="resume-div">
        <a
          href="https://drive.google.com/drive/folders/1pIRPhxWnSnfWCs9DEZeXvYeFQ02wp1h-"
          target="_blank"
        >
          My Resume
          {/* <FaFileDownload size="1rem" /> */}
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
