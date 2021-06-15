import React from "react";
import Head from "next/head";
import { VStack, Text, Box } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { ListOfInterests } from "../components/TravelInterestTypes";
import { ContinentesSlide } from "../components/ContinentsSlide";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Box as="main" w="100vw" h="100vh">
        <Header />
        <Banner />
        <ListOfInterests />

        <VStack justify="center" spacing={["6", "12"]}>
          <Divider />

          <Text
            fontSize={["xl", "2xl", "4xl"]}
            lineHeight="tall"
            fontWeight="medium"
            color="gray.500"
          >
            <Box as="span" display="block" textAlign="center">
              Vamos Nessa?
            </Box>
            Então escolha seu continente
          </Text>
        </VStack>

        <ContinentesSlide />
      </Box>
    </>
  );
}
