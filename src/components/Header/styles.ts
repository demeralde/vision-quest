import tw, { styled } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

const Container = tw.div`text-center px-4 py-12 xl:p-24`;

const Avatar = styled(GatsbyImage)(() => [tw`w-40 rounded-full`]);

const Name = tw.h1`text-4xl xl:text-6xl mt-10 font-bold`;

export { Container, Avatar, Name };
