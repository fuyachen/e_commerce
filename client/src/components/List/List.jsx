import Card from "../Card/Card"
import "./List.scss"
import useFetch from "../../hooks/useFetch"

const List = ({ categoryId, maxPrice, sort, selectedSubCat }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[category][id][$eq]=${categoryId}` +
      `${selectedSubCat.map(
        (item) => `&filters[sub_categories][id][$eq]=${item}`
      )}` +
      `&filters[price][$lte]=${maxPrice}` +
      `${sort ? `&sort=price:${sort}` : ""}`
  )

  return (
    <div className="list">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong!</h1>
      ) : (
        data?.map((item) => <Card key={item.id} item={item} />)
      )}
    </div>
  )
}

export default List
