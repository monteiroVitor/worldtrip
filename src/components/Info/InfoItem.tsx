import { VStack, Text, HStack, Tooltip, Icon, Box } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface InfoItemProps {
  title: string;
  description: string;
  tooltip?: string;
}

export function InfoItem({ title, description, tooltip }: InfoItemProps) {
  return (
    <VStack>
      <Text
        fontSize={["2xl", "5xl"]}
        fontWeight="semibold"
        color="yellow.500"
        lineHeight="shorter"
      >
        {title}
      </Text>

      {tooltip ? (
        <HStack align="center" spacing={["0", "2.5"]}>
          <Text fontWeight={["normal", "semibold"]} fontSize={["lg", "xl"]}>
            {description}
          </Text>
          <Tooltip label={tooltip} fontSize="md">
            <Box as="span">
              <Icon as={AiOutlineInfoCircle} fontSize={["10px", "16px"]} />
            </Box>
          </Tooltip>
        </HStack>
      ) : (
        <Text fontWeight={["normal", "semibold"]} fontSize={["lg", "xl"]}>
          {description}
        </Text>
      )}
    </VStack>
  );
}
