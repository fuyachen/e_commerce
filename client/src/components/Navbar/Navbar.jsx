import React from "react"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Link } from "react-router-dom"
import "./Navbar.scss"
import Cart from "../Cart/Cart"
import { useSelector } from "react-redux"

const Navbar = () => {
  const [cart, setCart] = React.useState(false)
  const products = useSelector((state) => state.cart.products)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png  " alt="Language" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/category/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/category/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/category/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="logo">
            <Link className="link">LAMASTORE</Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contacts">
              Contacts
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/stores">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className="cartIcon"
              onClick={() => {
                setCart(!cart)
              }}
            >
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
            {cart && <Cart />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
