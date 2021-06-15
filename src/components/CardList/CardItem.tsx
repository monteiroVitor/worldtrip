import { Box, Image, VStack, Flex, Text, Heading } from "@chakra-ui/react";

interface CardItemProps {
  cityPhoto: string;
  cityName: string;
  country: string;
  countryIcon: string;
}

export function CardItem({
  cityPhoto,
  cityName,
  country,
  countryIcon,
}: CardItemProps) {
  return (
    <Box
      w="256px"
      h="280px"
      bg="gray.50"
      border="1px solid rgba(255, 186, 8, 0.5)"
      borderRadius="6px"
    >
      <VStack spacing="5">
        <Box w="256px" m="-1px">
          <Image src={cityPhoto} alt="Londres" />
        </Box>
        <Flex width="80%" justify="space-between" align="center">
          <VStack align="start">
            <Heading as="h3" color="gray.500" fontWeight="semibold" size="md">
              {cityName}
            </Heading>
            <Text fontSize="md" color="gray.400">
              {country}
            </Text>
          </VStack>

          <Image borderRadius="full" boxSize="30px" src={countryIcon} />
        </Flex>
      </VStack>
    </Box>
  );
}
