import styles from "./Apps.module.css";
import App from "./MyApp/MyApp";
import bmi from "./../../assets/images/bmi-app.png";
import disnep from "./../../assets/images/disnep-app.png";
import disneyLand from "./../../assets/images/disneyland-app.png";
import heart from "./../../assets/images/heart-app.png";
import intervally from "./../../assets/images/intervally-app.png";
import mm from "./../../assets/images/mm-app.png";
import mt from "./../../assets/images/mt-app.png";
import spyfall from "./../../assets/images/spyfall-app.png";

const Apps = () => {
  return (
    <div className={styles.Apps} id="Apps">
      <h2>Apps</h2>
      <div className={styles.MyAppCont}>
        <App
          img={heart}
          imgAlt="iHeart Logo"
          heading="IHeartRadio"
          subHeading="app store link"
          worked="worked on"
        />
        <App
          img={disnep}
          imgAlt="Disnep Logo"
          heading="My Disney Experience"
          subHeading="app store link"
          worked="worked on"
        />
        <App
          img={disneyLand}
          imgAlt="Disney Land Logo"
          heading="Disneyland"
          subHeading="app store link"
          worked="worked on"
        />

        <App
          img={mt}
          imgAlt="MTSU Logo"
          heading="MTSU Mobile"
          subHeading="app store link"
          worked="worked on"
        />

        <App
          img={mm}
          imgAlt="MM Logo"
          heading="m.power"
          subHeading="company website"
          worked="built on contract"
        />
        <App
          img={intervally}
          imgAlt="Intervally Logo"
          heading="Intervally"
          subHeading="github link"
          worked="in progress"
        />
        <App
          img={spyfall}
          imgAlt="Spyfall Logo"
          heading="Spyfall ∙ Mobile"
          subHeading="app store link"
          worked="built & own"
        />
        <App
          img={bmi}
          imgAlt="bmi logo"
          heading="BMI Calculator"
          subHeading="app store link"
          worked="built & own"
        />
      </div>
    </div>
  );
};

export default Apps;
