import Cart from "../Cart/Cart";
import styles from "./HeaderCard.module.css";
const HeaderCard = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <Cart />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};
export default HeaderCard;
