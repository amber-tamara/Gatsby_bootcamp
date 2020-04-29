import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>email: amber@gmail.com</p>
      <p>mobile: 07777788888</p>
      <a
        href="https://twitter.com/louistheroux?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        rel="noopener noreferrer"
        target="_blank"
      >
        Loui's Twitter
      </a>
    </Layout>
  )
}

export default Contact
