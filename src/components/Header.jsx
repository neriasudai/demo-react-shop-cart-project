import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/cart">cart page({cart.length})</Link>
        </li>
        <li></li>
      </ul>
      <span>React context Api</span>
    </div>
  );
};

export default Header;
