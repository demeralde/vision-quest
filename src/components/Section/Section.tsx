import React from "react";

import Grid from "components/Grid";

import { Container, Title } from "./styles";
import { SectionProps } from "./types";

const Section = ({ name, children }: SectionProps) => (
	<Container>
		<Title>{name}</Title>
		<Grid>{children}</Grid>
	</Container>
);

export default Section;
