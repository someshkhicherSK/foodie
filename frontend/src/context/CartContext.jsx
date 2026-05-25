"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const CartContext =
  createContext();


export const CartProvider = ({
  children,
}) => {

  const [cartItems, setCartItems] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  // LOAD CART
  useEffect(() => {

    const storedCart =
      localStorage.getItem(
        "cart"
      );

    if (storedCart) {

      setCartItems(
        JSON.parse(
          storedCart
        )
      );

    }

    setLoading(false);

  }, []);


  // SAVE CART
  useEffect(() => {

    if (!loading) {

      localStorage.setItem(
        "cart",
        JSON.stringify(
          cartItems
        )
      );

    }

  }, [
    cartItems,
    loading,
  ]);


  // ADD TO CART
  const addToCart = (
    food
  ) => {

    setCartItems(
      (prev) => [

        ...prev,

        food,

      ]
    );

  };


  // REMOVE FROM CART
  const removeFromCart = (
    id
  ) => {

    setCartItems(
      (prev) =>
        prev.filter(
          (item) =>
            item._id !== id
        )
    );

  };


  // TOTAL PRICE
  const totalPrice =
    cartItems.reduce(
      (acc, item) =>
        acc +
        Number(
          item.price
        ),
      0
    );


  return (

    <CartContext.Provider
      value={{

        cartItems,

        addToCart,

        removeFromCart,

        totalPrice,

      }}
    >

      {children}

    </CartContext.Provider>

  );
};


export const useCart =
  () => useContext(
    CartContext
  );