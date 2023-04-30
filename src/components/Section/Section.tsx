import React from "react";

import { Container, Title, Grid } from "./styles";
import { SectionProps } from "./types";

const Section = ({ name, children }: SectionProps) => <Container>
		<Title>{name}</Title>
		<Grid>{children}</Grid>
	</Container>;

export default Section;
