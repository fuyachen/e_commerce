import "./Categories.scss"
import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className="categories">
      <div className="item sale">
        <Link to="/category/1">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>SALE</button>
        </Link>
      </div>
      <div className="item newSeason">
        <Link to="/category/1">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>NEW SEASON</button>
        </Link>
      </div>
      <div className="item men">
        <Link to="/category/1">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>MEN</button>
        </Link>
      </div>
      <div className="item accessories">
        <Link to="/category/1">
          <img
            src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>ACCESORIES</button>
        </Link>
      </div>
      <div className="item women">
        <Link className="link" to="/category/1">
          <img
            src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>WOMEN</button>
        </Link>
      </div>
      <div className="item shoes">
        <Link to="/category/1">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>SHOES</button>
        </Link>
      </div>
    </div>
  )
}

export default Categories
