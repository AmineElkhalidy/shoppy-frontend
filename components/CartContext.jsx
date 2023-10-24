import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

// Context Provider
export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  // Storing item in local storage!
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  // Get items from the localStorage
  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProduct(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  }

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
