import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutMe = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        Hey, my names Amber and I love learning about Web Development. Lately I
        learning React and created an App, that detects faces in photo's. To
        further my skills I am now learning about Gatsby which is a React-based,
        GraphQL powered, static site generator.
      </p>
      <Link to="./contact">Contact me.</Link>
    </Layout>
  )
}

export default AboutMe
