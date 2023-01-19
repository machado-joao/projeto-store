import React, { useState } from "react";
import "./Navbar.scss";

// Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// Utilities
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Component
import Cart from "../../components/Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/flags.png" alt="USA and UK flags." />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1" className="link">
              Women
            </Link>
          </div>
          <div className="item">
            <Link to="/products/2" className="link">
              Men
            </Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">
            STORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/" className="link">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              About
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon onClick={() => setOpen(!open)} />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
