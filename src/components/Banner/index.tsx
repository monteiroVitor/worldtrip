import {
  Flex,
  Heading,
  VStack,
  Text,
  Box,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export function Banner() {
  const isWide = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      bgImage="url(/images/Background.svg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={["163", "335"]}
      maxH={["163", "335"]}
      align="center"
      justify="space-evenly"
    >
      <VStack
        align="flex-start"
        spacing={[2, 5]}
        maxW="524"
        px={!isWide && "4"}
      >
        <Heading
          as="h1"
          fontSize={["xl", "4xl"]}
          color="gray.100"
          fontWeight="medium"
          lineHeight="tall"
        >
          <Box as="span" display="block">
            5 Continentes,
          </Box>
          infinitas possibilidades.
        </Heading>

        <Text
          color="gray.100"
          fontSize={["sm", "md"]}
          fontWeight="normal"
          lineHeight="tall"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </VStack>

      {isWide && <Image src="/images/Airplane.svg" mt="24" alt="Airplane" />}
    </Flex>
  );
}
