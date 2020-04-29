import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>
        I'm {author.site.siteMetadata.author}, a full-stack developer living in
        Great Britian
      </h2>
      <p>
        Need a developer? <Link to="./contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
