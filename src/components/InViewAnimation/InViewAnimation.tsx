import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

import { InViewAnimationProps } from "./types";
import { Container } from "./styles";

const InViewAnimation = ({ children, ...props }: InViewAnimationProps) => {
	const ref = useRef(null);
	const inView = useInView(ref);
	const [viewed, setViewed] = useState(false);

	useEffect(() => {
		if (inView === true && viewed === false) {
			setViewed(true);
		}
	}, [inView, viewed]);

	return (
		<Container firstView={viewed} ref={ref} {...props}>
			{children}
		</Container>
	);
};

export default InViewAnimation;
