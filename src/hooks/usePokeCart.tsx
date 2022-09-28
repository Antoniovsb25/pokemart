import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";

interface CartContextProps {
  cartTotalPrice: number;
  setcartTotalPrice: Dispatch<SetStateAction<number>>;
  productInfo: productInfoProps[];
  setProductInfo: Dispatch<SetStateAction<productInfoProps[]>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

interface productInfoProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface ChildrenProps {
  children: React.ReactNode[] | React.ReactNode;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartContextProvider = ({ children }: ChildrenProps) => {
  const [cartTotalPrice, setcartTotalPrice] = useState<number>(0);
  const [productInfo, setProductInfo] = useState<productInfoProps[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <CartContext.Provider
      value={{
        cartTotalPrice,
        setcartTotalPrice,
        productInfo,
        setProductInfo,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  const context = useContext(CartContext);

  return context;
}
