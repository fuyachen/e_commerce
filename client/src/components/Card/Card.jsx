import "./Card.scss"
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  const { title, price, isNew, oldPrice, img, img2 } = item.attributes
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img
            src={import.meta.env.VITE_UPLOAD_URL + img2?.data.attributes.url}
            alt={title}
            className="secondImg"
          />
          <img
            src={import.meta.env.VITE_UPLOAD_URL + img?.data.attributes.url}
            alt={title}
            className="mainImg"
          />
          {isNew && <span className="new">New Season</span>}
        </div>
        <h2 className="title">{title}</h2>
        <div className="price">
          {!isNew && (
            <span className="oldPrice">
              ${oldPrice || Math.floor(price * 1.2)}
            </span>
          )}
          <span className="newPrice">${price}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
