import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  AppBar,
  Toolbar,
  Button
} from "@mui/material";
import { Box } from "@mui/system";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const logoPath = useStaticQuery(graphql`
  //   query {
  //     allFile(filter: {extension: {eq: "png"}, name: {eq: "logo"}}) {
  //       edges {
  //         node {
  //           relativePath
  //         }
  //       }
  //     }
  //   }
  // `)


  const pages = [{name: "Qui sommes-nous ?", uri:"/a-propos"},{name: "Actualités", uri:"/actualites"},{ name: "'Nous Contacter'", uri:"#"}];


  const styleToolbar = { width: "100%", margin: "auto" }



  return (
    <div className={container}>
      <AppBar position="sticky">
        <Toolbar style={styleToolbar}>
          <Box sx={{ flexGrow: 1, display: 'block'}} >
            <Link to="/" target="_blank">
              <StaticImage
                className="logo-top-bar"
                src={"../../medias/images/commun/logo.png"}
                alt={data.site.siteMetadata.title}
                height="50"
                width="50"
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.uri} className={navLinkText}> 
                <Button
                  key={page.name}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout