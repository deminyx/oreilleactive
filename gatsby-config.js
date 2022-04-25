module.exports = {
    siteMetadata: {
        title: "Oreille Active",
        siteUrl: `https://www.yourdomain.tld`,
        logoUrl: "../images/logo.png"
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `sitefiles`,
              path: `${__dirname}/medias`,
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp"
    ]
}