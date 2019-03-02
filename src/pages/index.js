import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Olar pessoas</h1>
      <p>
        Este é um projeto com objetivo de mostrar como é feito um deploy com
        Netlify!{" "}
        <span role="img" aria-label="emoji feliz">
          😄
        </span>
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <div>
        <h2>Links</h2>
        <ul>
          <li>
            <a
              href="https://github.com/devraul/netlify-gatsby"
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              Link do repositório
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@raul_fdm/subindo-seu-projeto-frontend-em-2019-netlify-c52e15574736"
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              Link do Artigo
            </a>
          </li>
        </ul>
      </div>
    </main>
  </Layout>
)

export default IndexPage
