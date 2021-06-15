import Head from "next/head";
import {
  Box,
  Flex,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { CardList } from "../../components/CardList";
import { Info } from "../../components/Info";

export default function Europe() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Head>
        <title>Europa | worldtrip</title>
      </Head>

      <Box as="main" w="100vw" h="100vh">
        <Header />

        <Flex
          bgImage="url(/images/BannerEurope.svg)"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          h={["150", "500"]}
          justify="center"
          align="center"
        >
          <Flex
            direction="column"
            justify={["center", "flex-end"]}
            align={["center", "start"]}
            w="90%"
            h="90%"
          >
            <Heading
              as="h1"
              fontWeight="semibold"
              fontSize={["2xl", "5xl"]}
              lineHeight="tall"
              color="gray.100"
            >
              Europa
            </Heading>
          </Flex>
        </Flex>

        <VStack justify="center" mt={["6", "20"]} spacing={10}>
          <Info isWideVersion={isWideVersion} />

          <CardList />
        </VStack>
      </Box>
    </>
  );
}
