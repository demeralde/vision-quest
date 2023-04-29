import React from "react";

import { GridProps } from "./types";

import { Container } from "./styles";

const Grid = ({ children }: GridProps) => <Container>{children}</Container>;

export default Grid;
