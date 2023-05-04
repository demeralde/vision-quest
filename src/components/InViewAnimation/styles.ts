import tw, { styled } from "twin.macro";

import { ContainerProps } from "./types";

const Container = styled.div(({ firstView }: ContainerProps) => [
	tw`transition-all duration-1000 flex`,
	firstView === false && tw`opacity-0 -translate-y-12`,
	firstView === true && tw`opacity-100 translate-y-0`,
]);

export { Container };
