import React from "react";
import { GlobalStyles } from "twin.macro";

import { LayoutProps } from "./types";

const Layout = ({ children, ...rest }: LayoutProps) => (
	<main {...rest}>
		<GlobalStyles />
		{children}
	</main>
);

export default Layout;
