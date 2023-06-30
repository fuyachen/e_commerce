import React from "react"
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartReducer"

// const data = [
//   "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600",
//   "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600",
// ]

const Product = () => {
  const id = useParams().id
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
  const [selectedImg, setSelectedImg] = React.useState("img")
  const [quantity, setQuantity] = React.useState(1)
  const dispatch = useDispatch()

  return (
    <div className="product">
      {error ? (
        <h1>something went wrong!</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="left">
            <div className="sideImg">
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  data?.attributes.img.data.attributes.url
                }
                alt=""
                onClick={() => {
                  setSelectedImg("img")
                }}
              />
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  data?.attributes.img2.data.attributes.url
                }
                alt=""
                onClick={() => {
                  setSelectedImg("img2")
                }}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  import.meta.env.VITE_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1 className="title">{data?.attributes.title}</h1>
            <span className="price">${data?.attributes.price}</span>
            <p className="desc">{data?.attributes.desc}</p>
            <div className="quantity">
              <button
                onClick={() => {
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => {
                  setQuantity((prev) => prev + 1)
                }}
              >
                +
              </button>
            </div>

            <button
              className="addToCart"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes.title,
                    desc: data?.attributes.desc,
                    price: data?.attributes.price,
                    img: data?.attributes.img.data.attributes.url,
                    quantity: quantity,
                  })
                )
              }}
            >
              <AddShoppingCartIcon />
              ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon />
                ADD TO WISHLIST
              </div>
              <div className="item">
                <BalanceIcon />
                ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: Dress</span>
              <span>Tag: Dress, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Product
