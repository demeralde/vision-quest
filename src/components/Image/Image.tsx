import React from "react";

import { Image as StyledImage } from "./styles";
import { ImageProps } from "./types";

const Image = (props: ImageProps) => <StyledImage {...props} />;

export default Image;
