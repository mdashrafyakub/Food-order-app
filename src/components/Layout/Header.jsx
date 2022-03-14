import Mealsimg from "../../images/meals.jpg";
import styles from "./Header.module.css";
import HeaderCard from "./HeaderCard";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>

        <HeaderCard />
      </header>
      <div className={styles["main - image"]}>
        <img src={Mealsimg} alt="" />
      </div>
    </>
  );
};
export default Header;
