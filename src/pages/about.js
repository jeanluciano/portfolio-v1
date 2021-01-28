import React from "react"
import Layout from "./components/layout"
import me from "../../static/me.jpg"
export default function About(props) {
  const currentPath = props.location.pathname
  const prevPath = props.location.state.location.location
  return (
   
     
        <Layout location={currentPath} prevPath={prevPath}>
          <div className="column">
            <img src={me} />
            <h1>
              Fullstack Developer based out of Chicago. I have a passion for
              innovation and a love for technology
            </h1>
          </div>

          <div className="column right">
            <svg
              viewBox="2000 1000 4000 2500"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              className="about-svg"
            >
              <path
                d="M3404.59 1513.42c263.912-200.975 641.059-150.251 841.687 113.204 200.627 263.454 149.248 640.513-114.664 841.489-263.911 200.975-641.059 150.251-841.686-113.204-200.628-263.454-149.249-640.513 114.663-841.489zm62.46 82.019c218.605-166.473 531.023-124.582 697.208 93.644 166.185 218.227 123.501 530.537-95.104 697.011-218.605 166.473-531.023 124.582-697.208-93.644-166.185-218.227-123.501-530.537 95.104-697.011z"
                fill="#f69679"
              />
              <path
                d="M5018.28 1717.02c136.301-103.797 331.23-77.407 435.027 58.894 103.797 136.301 77.408 331.23-58.893 435.027-136.301 103.797-331.231 77.407-435.027-58.894-103.797-136.301-77.408-331.23 58.893-435.027z"
                fill="#ff5267"
              />
              <path
                d="M2143.84 1773.28c136.302-103.797 331.231-77.408 435.028 58.893 103.796 136.301 77.407 331.23-58.894 435.027-136.301 103.797-331.23 77.408-435.027-58.893-103.797-136.301-77.408-331.23 58.893-435.027zm50.488 66.298c99.71-75.932 242.31-56.627 318.242 43.083 75.931 99.71 56.627 242.309-43.084 318.241-99.71 75.932-242.309 56.627-318.241-43.083-75.932-99.71-56.627-242.309 43.083-318.241z"
                fill="#ff5167"
              />
              <path
                d="M4247.66 2692.65c-370.967 253.813-880.486 174.685-1155.83-186.878-284.237-373.247-211.972-907.039 161.274-1191.28l1030 1352.55-35.45 25.605z"
                fill="#ff5267"
              />
            </svg>
            <p>
              For those who have seen the Earth from space, and for the hundreds
              and perhaps thousands more who will, the experience most certainly
              changes your perspective. The things that we share in our world
              are far more valuable than those which divide us. It suddenly
              struck me that that tiny pea, pretty and blue, was the Earth. I
              put up my thumb and shut one eye, and my thumb blotted out the
              planet Earth. I didn’t feel like a giant. I felt very, very small.
            </p>
          </div>
        </Layout>
     
    
  )
}
