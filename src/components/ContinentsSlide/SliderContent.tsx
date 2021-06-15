import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SliderContentProps {
  title: string;
  image: string;
  url: string;
  description: string;
}

export function SliderContent({
  title,
  image,
  url,
  description,
}: SliderContentProps) {
  return (
    <Link href={url} passHref>
      <Box position="relative" cursor="pointer">
        <Image src={image} alt={title} />
        <Flex
          maxH={450}
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          direction="column"
          align="center"
          justify="center"
          bg="rgba(0,0,0,0.5)"
        >
          <Heading
            color="gray.100"
            fontSize={["2xl", "5xl"]}
            weight="bold"
            lineHeight="tall"
          >
            {title}
          </Heading>
          <Text
            color="gray.200"
            fontWeight="bold"
            fontSize={["md", "2xl"]}
            lineHeight="tall"
          >
            {description}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
}
