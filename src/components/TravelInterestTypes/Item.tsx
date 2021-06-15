import { VStack, Image, Text, HStack, Icon } from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";

interface InterestItemProps {
  src?: string;
  title: string;
  isWide?: boolean;
}

export function InterestItem({ src, title, isWide = true }: InterestItemProps) {
  if (!isWide)
    return (
      <HStack spacing="2">
        <Icon as={GoPrimitiveDot} color="yellow.500" size="8" />
        <Text
          fontWeight={["medium", "semibold"]}
          fontSize={["lg", "xl"]}
          color="gray.500"
        >
          {title}
        </Text>
      </HStack>
    );

  return (
    <VStack spacing="6">
      <Image src={src} alt={title} />
      <Text
        fontWeight={["medium", "semibold"]}
        fontSize={["lg", "xl"]}
        color="gray.500"
      >
        {title}
      </Text>
    </VStack>
  );
}
