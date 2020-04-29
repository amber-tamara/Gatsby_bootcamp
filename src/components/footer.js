import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by Amber{" "}
        <span aria-label="heart" role="img">
          💖
        </span>
        , copyright 2020
      </p>
    </footer>
  )
}

export default Footer
