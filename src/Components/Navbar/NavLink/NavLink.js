import styles from "./NavLink.module.css";

const NavLink = (props) => {
  return (
    <a href={props.link} className={styles.NavLink}>
      {props.children}
    </a>
  );
};

export default NavLink;
