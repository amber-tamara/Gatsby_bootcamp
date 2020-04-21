import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>email: amber@gmail.com</p>
      <p>mobile: 07777788888</p>
      <a
        href="https://twitter.com/louistheroux?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        rel="noopener"
        target="_blank"
      >
        Loui's Twitter
      </a>
      <Footer />
    </div>
  )
}

export default Contact
