import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <a
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer"
      href={props.link}
    >
      <div className={styles.Card}>
        <div className={styles.head}>
          <img src={props.logo} alt={props.logoAlt} />
          <p>{props.date}</p>
        </div>
        <div className={styles.body}>
          <h2>{props.heading}</h2>
          <p className={styles.subHead}>{props.subHeading}</p>
          <p>{props.children}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
