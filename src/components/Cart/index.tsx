import { useState } from "react";
import ModalOverlay from "../ModalOverlay";
import Card from "../../design/Card";
import styles from "./Cart.module.css";
import { useCartContext } from "../../hooks/usePokeCart";
const Cart = () => {
  const { cartTotalPrice, setcartTotalPrice, productInfo, setProductInfo } = useCartContext();
  const [openModal, setOpenModal] = useState(false);

  const finishCartHandler = () => {
    setProductInfo([]);
    setcartTotalPrice(0)
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal && <ModalOverlay closeModal={closeModal} children={undefined} />}
      <Card className={styles.cart}>
        <h2>Carrinho</h2>
        <div className={styles["products-container"]}>
          {productInfo.length === 0 && <span>Carrinho vazio...</span>}
          {productInfo.map((element, index) => (
            <div key={index} className={styles["product-container"]}>
              <div className={styles["product-container__image-name-wrapper"]}>
                <div className="product-container__image-wrapper">
                  <img src={element.image} />
                </div>
                <span className="product-container__name">{element.name}</span>
              </div>
              <span className="product-container__quantity">
                x{element.quantity}
              </span>
              <span className="product-container__price">
                R${element.price}
              </span>
            </div>
          ))}
          {cartTotalPrice !== 0 && <h3>Total: R$ {cartTotalPrice}</h3>}
        </div>
        <button
          type="button"
          onClick={finishCartHandler}
          className={styles.buyButton}
          disabled={productInfo.length === 0 ? true : false}
        >
          Finalizar
        </button>
      </Card>
    </>
  );
};

export default Cart;
