import React from "react";

import InViewAnimation from "components/InViewAnimation";

import { Container, Title, Grid } from "./styles";
import { SectionProps } from "./types";

const Section = ({ name, children }: SectionProps) => (
	<Container>
		<InViewAnimation>
			<Title>{name}</Title>
		</InViewAnimation>
		<InViewAnimation>
			<Grid>{children}</Grid>
		</InViewAnimation>
	</Container>
);

export default Section;
