import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeItem, resetCart } from "../../redux/cartReducer"

// const data = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title: "Long Sleeve Shirt",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//     price: 15,
//   },
//   {
//     id: 2,
//     img: "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600",
//     title: "Long Sleeve Shirt",
//     desc: "Long Sleeve Shirt",
//     price: 35,
//   },
// ]

const Cart = () => {
  const data = useSelector((state) => state.cart.products)
  const subtotal = () => {
    let total = 0
    data?.map((item) => {
      total += item.price * item.quantity
    })
    return total
  }
  const dispatch = useDispatch()

  return (
    <div className="cart">
      {data?.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="left">
              <img src={import.meta.env.VITE_UPLOAD_URL + item.img} alt="" />
              <div className="info">
                <h1 className="title">{item.title}</h1>
                <p className="desc">{item.desc?.substring(0, 60)}</p>
                <div className="priceBox">
                  <span className="quantity">{item.quantity}</span>
                  <span> x </span>
                  <span className="price">${item.price}</span>
                </div>
              </div>
            </div>
            <DeleteOutlinedIcon
              className="delete"
              onClick={() => {
                dispatch(removeItem(item.id))
              }}
            />
          </div>
        )
      })}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${subtotal()}</span>
      </div>
      <div className="bottom">
        <div
          className="reset"
          onClick={() => {
            dispatch(resetCart())
          }}
        >
          Reaset Cart
        </div>
        <button className="checkout">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart
