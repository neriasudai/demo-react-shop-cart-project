import React, { useEffect, useState, useContext } from "react";
import { Cart } from "../Context";
import SingleProduct from "./SingleProduct";

const CartPage = ({}) => {
  const { cart, setCart } = useContext(Cart);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <hr />
      <span style={{ fontSize: 30 }}>{total}</span>
      <div className="productsContainer">
        {cart.map((prod) => {
          return (
            <SingleProduct
              prod={prod}
              cart={cart}
              setCart={setCart}
              key={prod.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
