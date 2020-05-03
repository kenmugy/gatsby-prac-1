import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/index.scss'

export default () => (
  <Layout>
    <Header title="Hello" emoji="⛪" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ad vero?
      Magni autem ex velit soluta inventore error totam molestiae minus sapiente
      cumque, laudantium minima a perferendis iste nulla non.
    </p>
  </Layout>
)
