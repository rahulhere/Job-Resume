import styles from "./Experience.module.css";
import Card from "./Card/Card";
import heart from "./../../assets/images/heart-img.jpg";
import disnep from "./../../assets/images/disnep-logo.png";
import mentor from "./../../assets/images/mobile-mentor-logo.png";
import mt from "./../../assets/images/mt-logo.png";

const Experience = () => {
  return (
    <div className={styles.Experience} id="Experience">
      <h2>Experience</h2>
      <Card
        logo={heart}
        logoAlt="iHeart Logo"
        date="Apr 2020 - Current"
        heading="iHeartMedia"
        subHeading="React Developer"
        link="https://www.iheartmedia.com/"
      >
        At iHeartMedia, the parent company of iHeartRadio, I work on a team of
        developers as an Associate iOS Engineer utilizing an agile workflow. I
        work primarily on maintaining and updating the flagship iOS Application
        with a high focus on monetization and have had the opportunity to build
        out entire features. We use many tools and frameworks, such as Swift,
        Objective-C, Realm, TestFlight, Jenkins, BAPromise, AppCenter, and much
        more.
      </Card>
      <Card
        logo={disnep}
        logoAlt="Disnep Company Logo"
        date="Jan 2020 - Apr 2020"
        heading="The Walt Disney Company"
        subHeading="React Developer Intern"
        link="https://www.thewaltdisneycompany.com/"
      >
        While working as a Professional Intern at The Walt Disney Company, I
        worked as an iOS Developer Intern on the PhotoPass Team. PhotoPass is a
        feature in the Disney World and Disneyland apps that allow users to
        access photos taken at the park. I worked primarily on a dynamic
        framework in conjunction with many other frameworks that other teams at
        Disney managed which are all used in Disney’s flagship park
        applications. Working with my team gave me the chance to learn about
        many tools and frameworks, including Carthage, Charles, Accessibility
        Inspector, and many iOS photo editing libraries.
      </Card>
      <Card
        logo={mentor}
        logoAlt="Mobile Mentor Logo"
        date="Apr 2019 - Feb 2020"
        heading="Mobile Mentor"
        subHeading="React Developer Intern"
        link="https://www.mobile-mentor.com/"
      >
        During my time at Mobile Mentor, I got the chance to work on a team of 6
        iOS Developers building many features for physician and client-facing
        applications that would be used for one of the nation’s largest
        healthcare companies, HCA. The primary task of my internship was
        building their client-facing Zendesk in-House iOS app. This led me to
        working with multiple tools, frameworks, and services, such as Azure
        Identity Platform, Azure Blob Storage, Server-less Azure Functions, MSAL
        &amp; ADAL Authentication Libraries, Urban Airship, OAuth 2.0, OpenID
        Connect, Zendesk SDK, and Firebase Analytics/Crashlytics.
      </Card>
      <Card
        logo={mt}
        logoAlt="MT Logo"
        date="Jan 2019 - Current"
        heading="Middle Tennessee State University"
        subHeading="React Developer"
        link="https://www.mtsu.edu/"
      >
        At MTSU, the university that I’m currently attending, I’m working on
        their mobile team as an iOS Developer. This was my first iOS developing
        position and gave me a great foundation in iOS Development. I have
        contributed to a team of 9 developers that maintain the iOS and Android
        mobile apps that are used by the MTSU student body (30k+ students).
        During my time on the team, I’ve gotten the chance to contribute to a
        large codebase using an MVVM architecture and reactive programming
        through RxSwift.
      </Card>
    </div>
  );
};

export default Experience;
