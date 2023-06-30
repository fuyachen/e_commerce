import { useState } from "react"
import List from "../../components/List/List"
import { useParams } from "react-router-dom"
import "./Category.scss"
import useFetch from "../../hooks/useFetch"

const Products = () => {
  const categoryId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(500)
  const [sort, setSort] = useState(null)
  const [selectedSubCat, setSelectedSubCat] = useState([])

  const { data } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${categoryId}`
  )

  const handleChange = (e) => {
    const changedId = e.target.value
    const isChecked = e.target.checked
    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, changedId]
        : selectedSubCat.filter((id) => id !== changedId)
    )
  }

  return (
    <div className="category">
      <div className="left">
        <div className="filterItem">
          <h1>Product Categories</h1>
          {data?.map((item) => {
            return (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            )
          })}
        </div>
        <div className="filterItem">
          <h1>Filter by Price</h1>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              value={maxPrice}
              max={500}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h1>Sort by</h1>
          <div className="inputItem">
            <input
              type="radio"
              name="Price"
              id="asc"
              onChange={(e) => setSort(e.target.id)}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="Price"
              id="desc"
              onChange={(e) => setSort(e.target.id)}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="banner">
          <img src="/img/banner.png" alt="" />
        </div>
        <List
          categoryId={categoryId}
          maxPrice={maxPrice}
          sort={sort}
          selectedSubCat={selectedSubCat}
        />
      </div>
    </div>
  )
}

export default Products
