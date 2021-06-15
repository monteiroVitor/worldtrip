import { SimpleGrid, VStack, Heading } from "@chakra-ui/react";
import { CardItem } from "./CardItem";

export function CardList() {
  return (
    <VStack w="90%" align="flex-start" spacing="10">
      <Heading fontWeight="medium" size="xl" as="h2" color="gray.500">
        Cidades +100
      </Heading>
      <SimpleGrid gap="10" columns={[1, null, 2, 3, 4]}>
        <CardItem
          cityName="Londres"
          cityPhoto="/images/londres.svg"
          country="Reino Unido"
          countryIcon="/images/icons/reino-unido.svg"
        />
        <CardItem
          cityName="Paris"
          cityPhoto="/images/paris.svg"
          country="França"
          countryIcon="/images/icons/franca.svg"
        />
        <CardItem
          cityName="Roma"
          cityPhoto="/images/roma.svg"
          country="Itália"
          countryIcon="/images/icons/italia.svg"
        />
        <CardItem
          cityName="Praga"
          cityPhoto="/images/praga.svg"
          country="República Tcheca"
          countryIcon="/images/icons/republica-tcheca.svg"
        />
        <CardItem
          cityName="Amsterdã"
          cityPhoto="/images/amsterda.svg"
          country="Holanda"
          countryIcon="/images/icons/holanda.svg"
        />
      </SimpleGrid>
    </VStack>
  );
}
