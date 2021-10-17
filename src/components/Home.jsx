import { useState, useContext } from "react";
import React from "react";
import faker from "faker";
import SingleProduct from "./SingleProduct";
import "../SingleProduct.css";
import { Cart } from "../Context";
faker.seed(100);
const Home = ({}) => {
  console.log(useContext(Cart));
  const productsArray = [...Array(21)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(productsArray);

  return (
    <div className="productsContainer">
      {products.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id} />;
      })}
    </div>
  );
};

export default Home;
