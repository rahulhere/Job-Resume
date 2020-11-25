import styles from "./Articles.module.css";
import Card from "./Card/Card";
import bpArticle from "./../../assets/images/bp-article.png";
import mediumArticle from "./../../assets/images/medium-article.png";

const Articles = () => {
  return (
    <div className={styles.Articles} id="Articles">
      <h2>Articles</h2>
      <Card
        logo={bpArticle}
        logoAlt="BP Logo"
        date="Aug 2020"
        heading="How to become an IOS Developer"
        subHeading="A huge list of helpful resources to help you get started as an iOS developer today"
        link="https://no-link-found/"
      >
        Selected by Medium Curators
      </Card>
      <Card
        logo={mediumArticle}
        logoAlt="Medium Logo"
        date="Dec 2020"
        heading="How do Spotify and Apple Music pay artists? — Media"
        subHeading="Distribution model of large music streaming services"
        link="https://no-link-found/"
      />
      <Card
        logo={bpArticle}
        logoAlt="BP Logo"
        date="Aug 2019"
        heading="How To Programmatically Add Shadow and Rounded Corners to a View — Swift"
        subHeading="It’s not always enough to just define your properties and add a corner radius"
        link="https://no-link-found/"
      />
    </div>
  );
};

export default Articles;
