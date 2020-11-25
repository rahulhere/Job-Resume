import styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={props.img} alt={props.imgAlt} />
      <p>{props.imgDes}</p>
    </div>
  );
};

export default Logo;
