import React, { useState, useRef, useEffect } from "react";
import { useCartContext } from "../../hooks/usePokeCart";
import styles from "./Header.module.css";

interface PokemonProps {
  name: string;
  url: string;
}

const Header = () => {
  const searchValue = useRef<HTMLInputElement | null>(null);
  const { setInputValue } = useCartContext();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const filterHandler = () => {
    if (searchValue !== null && searchValue.current !== null) {
      setInputValue(searchValue.current.value);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${scrollPosition > 0 && styles.scrolled}`}
    >
      <nav className={styles.gridContainer}>
        <h1 className={styles.logo}>PokeMart</h1>
        <input
          type="search"
          placeholder="Search.."
          className={styles.search}
          ref={searchValue}
          onChange={filterHandler}
        />
      </nav>
    </header>
  );
};

export default Header;
