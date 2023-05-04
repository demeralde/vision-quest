import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import GraphPaper from "images/graph-paper.svg";

import { HeaderProps } from "./types";
import { Container, Avatar, AvatarContainer, Name, NameContainer } from "./styles";

const Header = ({ name }: HeaderProps) => {
	const avatarImage = useStaticQuery(graphql`
		query HeaderQuery {
			file(relativePath: { eq: "avatar.jpg" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED)
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
			<AvatarContainer>
				<Avatar alt={name} image={getImage(avatarImage.file)} />
			</AvatarContainer>
			<NameContainer>
				<Name>{name}</Name>
			</NameContainer>
		</Container>
	);
};

export default Header;
