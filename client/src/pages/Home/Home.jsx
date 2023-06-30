import React from "react"
import Slider from "../../components/Slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categoreis/Categories"
import Contact from "../../components/Contact/Contact"

const Home = () => {
  return (
    <>
      <Slider />
      <FeaturedProducts types="Trending" />
      <Categories />
      <FeaturedProducts types="Featured" />
      <Contact />
    </>
  )
}

export default Home
