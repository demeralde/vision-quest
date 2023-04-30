import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import GraphPaper from "images/graph-paper.svg";

import { HeaderProps } from "./types";
import { Container, Avatar, Name } from "./styles";

const Header = ({ name }: HeaderProps) => {
	const avatarImage = useStaticQuery(graphql`
		query HeaderQuery {
			file(relativePath: { eq: "avatar.jpg" }) {
				childImageSharp {
					gatsbyImageData(quality: 100, placeholder: BLURRED)
				}
			}
		}
	`);

	return (
		<Container
			style={{
				backgroundImage: `url("${GraphPaper}")`,
			}}
		>
			<Avatar alt={name} image={getImage(avatarImage.file)} />
			<Name>{name}</Name>
		</Container>
	);
};

export default Header;
