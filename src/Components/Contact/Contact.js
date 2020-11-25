import styles from "./Contact.module.css";
import Logo from "./Logo/Logo";
import linkedin from "./../../assets/images/linkedin-contact.png";
import gmail from "./../../assets/images/gmail-contact.png";
import github from "./../../assets/images/github-contact.png";

const Contact = () => {
  return (
    <div className={styles.Contact} id="Contact">
      <h2>Contact</h2>
      <div className={styles.logoCont}>
        <Logo img={github} imgAlt="Github Logo" imgDes="Github" />
        <Logo img={linkedin} imgAlt="Linkedin Logo" imgDes="LinkedIn" />
        <Logo img={gmail} imgAlt="Gmail Logo" imgDes="Email" />
      </div>
    </div>
  );
};

export default Contact;
