import React from "react"
import HomePlanet from "./components/homeplanet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import Layout from "./components/layout"

export default function Home(props) {
  const currentPath = props.location.pathname

  const prevPath = props.location.state
    ? props.location.state.location.location
    : "/";
  return (
    <Layout location={currentPath} prevPath={prevPath}>
      <div className="column left">
        <HomePlanet />
      </div>
      <div className="column right">
        <div className="intro-text">
          <h1>
            Hello, my name is Jean Luciano, I'm a fullstack web developer. Other
            than coding I enjoy art and design, scify and gaming.{" "}
          </h1>
        </div>
      </div>

      {/* <div className="footer">
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
          <FontAwesomeIcon className="icon" icon={faGithubAlt} />
        </div> */}
    </Layout>
  )
}


