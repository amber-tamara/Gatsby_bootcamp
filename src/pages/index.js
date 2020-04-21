import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>I'm Amber, a full-stack developer living in Great Britian</h2>
      <p>
        Need a developer? <Link to="./contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default IndexPage
