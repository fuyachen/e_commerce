import "./FeaturedProducts.scss"
import Card from "../Card/Card"
import useFetch from "../../hooks/useFetch"

const FeaturedProducts = ({ types }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=img,img2&filters[type][$eq]=${types}`
  )

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{types} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum.
        </p>
      </div>
      <div className="bottom">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong!</h1>
        ) : (
          data?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  )
}

export default FeaturedProducts
