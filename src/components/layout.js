import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { CloseRounded, MenuRounded } from "@mui/icons-material";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
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

  const styleToolbar = {  width: "100%", margin: "auto" }



  return (
    <div className={container}>
      <AppBar position="sticky">
        <Toolbar style={styleToolbar}>
          <Box className="top-bar-left">
            <Link to="/" target="_blank">
              LOGO
              <img
                className="logo-top-bar"
                src={"../../images/logo.png"}
                alt="Logo Devfest 2021"
                height="50"
                width="150"
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/actualites" className={navLinkText}>
              Actualités
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/a-propos" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout