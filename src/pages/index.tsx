import * as React from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import groupBy from "lodash/groupBy";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "components/Layout";
import Image from "components/Image";
import Header from "components/Header";
import Section from "components/Section";
import EmptyPlaceholder from "components/EmptyPlaceholder";

const IndexPage: React.FC<PageProps> = ({
	data,
}: PageProps<Queries.IndexPageQuery>) => {
	const imagesBySection = Object.entries(
		groupBy(data.images.edges, "node.relativeDirectory")
	);

	const getSectionName = (name: string): string => name.replace("board/", "");

	return (
		<Layout>
			<Header name="Daniel Emeralde" />
			{imagesBySection.length > 0 ? (
				imagesBySection.map(([name, images]) => (
					<Section name={getSectionName(name)}>
						{images.map(({ node: { name, childImageSharp } }, index) => (
							<Image key={name} alt={name} image={getImage(childImageSharp)} />
						))}
					</Section>
				))
			) : (
				<EmptyPlaceholder />
			)}
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<>
		<title>Vision Quest</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
		<link
			href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono&display=swap"
			rel="stylesheet"
		/>
	</>
);

export const query = graphql`
	query IndexPage {
		images: allFile(
			filter: {
				extension: { regex: "/(jpg)|(jpeg)|(png)|(tif)|(tiff)|(webp)/" }
				relativeDirectory: { glob: "board/*" }
			}
		) {
			edges {
				node {
					relativeDirectory
					name
					childImageSharp {
						gatsbyImageData(quality: 100, placeholder: BLURRED)
					}
				}
			}
		}
	}
`;
