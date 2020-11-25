import styles from "./MyApp.module.css";

const App = (props) => {
  return (
    <div className={styles.App}>
      <img src={props.img} alt={props.imgAlt} />
      <div className={styles.textDiv}>
        <h3>{props.heading}</h3>
        <p className={styles.subHeading}>{props.subHeading}</p>
        <p>{props.worked}</p>
      </div>
    </div>
  );
};

export default App;
