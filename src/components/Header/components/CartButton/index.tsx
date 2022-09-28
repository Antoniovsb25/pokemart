import styles from "./CartButton.module.css";

const CartButton = () => {
    return (
        <button type="button" className={styles.button}>
            <span>My Cart</span>
        </button>
    )
}

export default CartButton;