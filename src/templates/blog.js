import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const query = graphgl`query (
  $slug: String:
) { 
  markdownRemark (fields: 
    {slug:
      {eq: 
        "react"
      } } )  
  {frontmatter {title}
  } }`

const Blog = () => {
  return <Layout>This is the blog template</Layout>
}

export default Blog
