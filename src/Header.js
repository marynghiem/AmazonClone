import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
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
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_option_line_one">Hello {!user ? "Guest" : user.email}</span>
            <span className="header_option_line_two">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_option_line_one">Returns</span>
            <span className="header_option_line_two">Orders</span>
          </div>
        </Link>
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
