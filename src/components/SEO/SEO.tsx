import React from "react";

const SEO = () => (
	<>
		<title>{process.env.GATSBY_BOARD_NAME}</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
		<link
			href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=JetBrains+Mono&display=swap"
			rel="stylesheet"
		/>
	</>
);

export default SEO;
