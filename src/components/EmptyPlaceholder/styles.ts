import tw, { styled } from "twin.macro";
import { PhotoIcon } from "@heroicons/react/24/solid";

const Container = tw.div`text-center max-w-lg mx-auto`;

const Icon = styled(PhotoIcon)(() => [tw`w-12 h-12 mx-auto text-green-600`]);

const Title = tw.h3`text-3xl font-bold mt-2 mb-6 text-gray-700`;

const Description = tw.p`text-xl leading-relaxed text-gray-500`;

const Code = tw.code`font-mono text-green-500`;

const Link = tw.a`font-semibold underline text-gray-500 hover:text-gray-600 transition-colors`;

export { Container, Icon, Title, Description, Code, Link };
