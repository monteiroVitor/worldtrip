import { useBreakpointValue, Wrap, WrapItem } from "@chakra-ui/react";
import { InterestItem } from "./Item";

const travelInterestTypes = [
  { src: "/images/icons/cocktail.svg", title: "vida noturna" },
  { src: "/images/icons/surf.svg", title: "praia" },
  { src: "/images/icons/building.svg", title: "moderno" },
  { src: "/images/icons/museum.svg", title: "clássico" },
  { src: "/images/icons/earth.svg", title: "e mais..." },
];

export function ListOfInterests() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Wrap spacing={[6, 8, 16, 32]} justify="center" my={["8", "20"]} mx="4">
      {travelInterestTypes.map((item) => (
        <WrapItem key={item.title}>
          <InterestItem
            src={item.src}
            title={item.title}
            isWide={isWideVersion}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
}

/*
 * Usando grid
  return (
    <Flex align="center" justify="center" my={["8", "20"]} mx="4">
      <SimpleGrid columns={[2, 3, 3, 5]} spacing={[6, 8, 16, 32]} maxW="1180">
        {travelInterestTypes.map((item) => (
          <InterestItem
            src={item.src}
            title={item.title}
            isWide={isWideVersion}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
*/
