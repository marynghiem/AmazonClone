import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>
      <div className="header_search">
        <input className="header_search_input" type="text" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line_one">Hello Guest</span>
          <span className="header_option_line_two">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option_line_one">Returns</span>
          <span className="header_option_line_two">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_option_basket">
            <ShoppingBasket />
            <span className="header_option_line_two header_basket_count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
