import React, { useContext } from "react";
import { Cart } from "../Context";
import "../SingleProduct.css";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <span style={{ fontWeight: 700 }}>{prod.name}</span>
      <span>{prod.price.substring(0, 3)}</span>
      {cart.includes(prod) ? (
        <button
          className="remove"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          remove from cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          add to cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
