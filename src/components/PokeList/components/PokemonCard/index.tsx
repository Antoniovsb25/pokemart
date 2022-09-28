import { useCartContext } from "../../../../hooks/usePokeCart";

import Card from "../../../../design/Card";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  imageCart: string;
  price: number;
}

const PokemonCard = ({
  id,
  name,
  image,
  imageCart,
  price,
}: PokemonCardProps) => {
  const { setcartTotalPrice, productInfo, setProductInfo } = useCartContext();

  const cartTotalPriceHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setcartTotalPrice((prevPrice) => prevPrice + price);
    const isAlreadyInCart = productInfo.find((element) => element.name === name);
    if (isAlreadyInCart) {
      const productWithNewQuantity = productInfo.map((el) => {      
        if (el.id === isAlreadyInCart.id) {
          el.quantity = el.quantity + 1;
          el.price = price * el.quantity
        }
        return el;
      });
      setProductInfo(productWithNewQuantity);
    } else {
      setProductInfo((prevState) => {
        return [
          ...prevState,
          { id: id, image: imageCart, name: name, price: price, quantity: 1 },
        ];
      });
    }
  };

  return (
    <Card className={styles.pokecard}>
      <div className={styles.imagewrapper}>
        <img src={image} />
      </div>
      <span>{name}</span>
      <span>R${price}</span>
      <button type="button" className={styles.buyButton} onClick={cartTotalPriceHandler}>
        Comprar
      </button>
    </Card>
  );
};

export default PokemonCard;
