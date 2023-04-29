import tw, { styled } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

const Container = tw.div`text-center p-24`;

const Avatar = styled(GatsbyImage)(() => [tw`w-40 rounded-full`]);

const Name = tw.h1`text-4xl mt-5 font-bold`;

export { Container, Avatar, Name };
