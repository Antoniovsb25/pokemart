import Header from "../../components/Header";
import PokeList from "../../components/PokeList";
import Cart from "../../components/Cart";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <PokeList />
      <Cart />
    </section>
  );
};

export default Home;
