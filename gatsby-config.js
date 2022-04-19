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
              name: `blog`,
              path: `${__dirname}/actualites`,
            }
        },
        "gatsby-plugin-mdx",
    ]
}