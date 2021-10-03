import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Me presento</h1>
    <StaticImage
      src="../images/perfil.png"
      width={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      Apasionado de la informática, la comunicación y nuevas tecnologías. Creativo y comunicativo.
      Emprendedor con ganas de formarse en el mundo empresarial. Afán de superación.
    </p>

    <h2>
      <p>
        <u>
          EXPERIENCIA
        </u>
      </p>
    </h2>

    <StaticImage
      src="../images/Exp_Laboral.png"
      width={800}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

    <h2>
      <p>
        <u>
          EDUCACION
        </u>
      </p>
    </h2>

    <StaticImage
      src="../images/Formacion.png"
      width={700}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

    <h2>
      <p>
        <u>
          CERTIFICADOS
        </u>
      </p>
    </h2>

    <StaticImage
      src="../images/Certificados.png"
      width={700}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />



    {/* <p> 
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>*/}

  </Layout>
)

export default IndexPage