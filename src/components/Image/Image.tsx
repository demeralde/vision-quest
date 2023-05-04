import React from "react";
import Zoom from "react-medium-image-zoom";

import { Image as StyledImage } from "./styles";
import { ImageProps } from "./types";

const Image = (props: ImageProps) => (
	<Zoom>
		<StyledImage backgroundColor="#e2e8f0" {...props} />
	</Zoom>
);

export default Image;
