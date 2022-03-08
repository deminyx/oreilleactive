import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}


// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Page Introuvable</title>
      <h1 style={headingStyles}>Page Introuvable</h1>
      <p style={paragraphStyles}>
        Désolé{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        nous n'avons pas trouvé ce que vous cherchez.
        <br />
      </p>
      <Link to="/">Revenir à l'accueil</Link>.
    </main>
  )
}

export default NotFoundPage
