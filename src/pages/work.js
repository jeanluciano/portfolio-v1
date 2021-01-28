import React from "react"
import Planet from "./components/Planet"
import Layout from "./components/layout"
import Slider from "react-slick"

export default function Work(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,

    appendDots: dots => <ul style={{ margin: "0px" }}> {dots} </ul>,
    customPaging: i => <div className="dot"></div>,
  }
  const currentPath = props.location.pathname
  const prevPath = props.location.state.location.location

  return (
    <Layout location={currentPath} prevPath={prevPath}>
      <div className="column left">
        <div className="work-text">
          <h1>This is my work.</h1>
          <p>
            I enjoy working with many technologies whether it be in the frontend
            with things like React, CSS3, SVG or in the backend with Node,
            graphql, and many many more.
          </p>
        </div>
      </div>
      <div className="column right">
        <div className="carousel">
          <Slider {...settings}>
            <Planet></Planet>
            <Planet></Planet>
            <Planet></Planet>
            <Planet></Planet>
            <Planet></Planet>
          </Slider>
        </div>
      </div>
    </Layout>
  )
}
