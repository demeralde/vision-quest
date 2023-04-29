import React from "react";

import { Container, Icon, Title, Description, Code, Link } from "./styles";

const EmptyPlaceholder = () => (
	<Container>
		<Icon />
		<Title>No photos exist</Title>
		<Description>
			Add some to your <Code>src/images/board</Code> folder. Check out{" "}
			<Link
				href="https://github.com/dspacejs/vision-quest"
				target="_blank"
				rel="noreferrer"
			>
				the documentation
			</Link>{" "}
			for more help.
		</Description>
	</Container>
);

export default EmptyPlaceholder;
