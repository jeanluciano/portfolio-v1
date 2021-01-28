import React from "react"
import Header from "./Header"
import Ring from "./Ring"
import PageTransition from "gatsby-plugin-page-transitions"
import chooseDirection from "../helper/choose-direction"
export default function Layout(props) {
  const prevPath = props.prevPath
  const currentPath = props.location

  return (
    <PageTransition
      defaultStyle={{
        transition: `transform 200ms, opacity 200ms ease`,
        opacity: 1,
      }}
      transitionStyles={{
        entering: {
          transform: chooseDirection(prevPath, currentPath)[0],
          opacity: 0,
        },
        entered: {
          transform: chooseDirection(prevPath, currentPath)[1],
          opacity: 1,
        },
        exiting: {
          transform: chooseDirection(currentPath, prevPath)[0],
          opacity: 0,
        },
        exited: {
          transform: chooseDirection(currentPath, prevPath)[0],
          opacity: 0,
        },
      }}
      transitionTime={500}
    >
      <div
        className={`splash ${
          props.location.slice(1) ? props.location.slice(1) : "home"
        }`}
      >
        <Header location={props.location}></Header>
        <Ring location={props.location} />
        <div className="container">{props.children}</div>
      </div>
    </PageTransition>
  )
}
