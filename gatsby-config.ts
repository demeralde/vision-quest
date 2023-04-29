import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config();

const config: GatsbyConfig = {
	siteMetadata: {
		title: process.env.GATSBY_BOARD_NAME,
		siteUrl: process.env.GATSBY_SITE_URL,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-root-import",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.svg",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		"gatsby-plugin-postcss",
		"gatsby-plugin-emotion",
		"gatsby-plugin-offline",
	],
};

export default config;
