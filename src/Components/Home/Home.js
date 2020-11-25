import styles from "./Home.module.css";
import Wave from "react-wavify";
import resume from "./../../assets/Rahul Resume.pdf";

const Home = (props) => {
  return (
    <div className={styles.Home}>
      <div className={styles.Intro}>
        <h1>Rahul Soni</h1>
        <h2>Positive, Energetic React Developer at EngineerBabu</h2>
        <a target="_blank" rel="noreferrer" href={resume}>
          Download Resume
        </a>
      </div>
      <Wave
        className={styles.wave}
        fill="#fff"
        paused={false}
        options={{
          height: 30,
          amplitude: 60,
          speed: 0.2,
          points: 3,
        }}
      />
    </div>
  );
};

export default Home;
