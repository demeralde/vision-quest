import * as React from "react";
import groupBy from "lodash/groupBy";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "components/Layout";
import Image from "components/Image";
import Header from "components/Header";
import Section from "components/Section";
import EmptyPlaceholder from "components/EmptyPlaceholder";
import SEO from "components/SEO";

const IndexPage: React.FC<PageProps> = ({
	data,
}: PageProps<Queries.IndexPageQuery>): React.ReactElement => {
	const imagesBySection = Object.entries(groupBy(data.images.edges, "node.relativeDirectory"));
	const getSectionName = (name: string): string => name.replace("board/", "");

	return (
		<Layout>
			<Header name={process.env.GATSBY_BOARD_NAME as string} />
			{imagesBySection.length > 0 ? (
				imagesBySection.map(([sectionName, images]) => (
					<Section key={sectionName} name={getSectionName(sectionName)}>
						{images.map(({ node: { name, childImageSharp } }) => (
							<Image key={name} alt={name} title={name} image={getImage(childImageSharp)} />
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

export const Head: HeadFC = (): React.ReactElement => <SEO />;

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
						gatsbyImageData(placeholder: BLURRED)
					}
				}
			}
		}
	}
`;
