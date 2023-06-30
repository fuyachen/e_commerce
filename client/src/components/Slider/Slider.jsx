import React from "react"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"
import WestOutlinedIcon from "@mui/icons-material/WestOutlined"
import "./Slider.scss"

const data = [
  // "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_0.87,q_auto:best,w_1,x_0,y_0/if_w_gt_2000,c_scale,w_2000/xpld1wzgoyiybub2icio.jpg",
  // "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_0.75,q_auto:best,w_0.85,x_0.14,y_0/if_w_gt_2000,c_scale,w_2000/znzevgfatuz2icxtzlef.jpg",
  // "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_0.75,q_auto:best,w_0.85,x_0.08,y_0.22/if_w_gt_2000,c_scale,w_2000/cdvvblisxt7d50kexejc.jpg",
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
