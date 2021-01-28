import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
export default function Header(props) {
  const location = { location: props.location }

  return (
    <div className="header">
      <h2>Jean Carlos Luciano</h2>

      <nav>
        <StyledLink
          className={`${location.location === "/" ? "active" : ""}`}
          state={{ location }}
          to="/"
        >
          home
        </StyledLink>
        <StyledLink
          className={` ${location.location === "/about" ? "active" : ""}`}
          state={{ location }}
          to="/about"
        >
          about
        </StyledLink>
        <StyledLink
          className={` ${location.location === "/work" ? "active" : ""}`}
          state={{ location }}
          to="/work"
        >
          work
        </StyledLink>
        <StyledLink
          className={`${location.location === "/contact" ? "active" : ""}`}
          state={{ location }}
          to="/contact"
        >
          contact
        </StyledLink>
      </nav>
    </div>
  )
}

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: var(--main-color);
  margin: 1%;
  font-family: "Orbitron", sans-serif;
  width: 25%;
  position: relative;
  z-index: 1;

  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 0.5rem;
    bottom: -20%;
    left: 50%;
    position: absolute;
    background: var(--dark-accent);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    z-index: -1;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }

  .active:after {
    width: 100%;
    left: 0;
  }
`
