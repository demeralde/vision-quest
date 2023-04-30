import React from "react";
import Zoom from "react-medium-image-zoom";

import { Image as StyledImage } from "./styles";
import { ImageProps } from "./types";

const Image = (props: ImageProps) => <Zoom>
		<StyledImage style={{ height: "100%" }} {...props} />
	</Zoom>;

export default Image;
