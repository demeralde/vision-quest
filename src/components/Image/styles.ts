import tw, { styled } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = styled(GatsbyImage)(() => [tw`shrink-0 grow`]);

export { Image };
