import React from "react";
import { GlobalStyles } from "twin.macro";

import { Container } from "./styles";
import { LayoutProps } from "./types";

const Layout = ({ children, ...rest }: LayoutProps): React.ReactElement => (
	<Container {...rest}>
		<GlobalStyles />
		{children}
	</Container>
);

export default Layout;
