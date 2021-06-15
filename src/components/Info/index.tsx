import { Box, Text, HStack, Stack } from "@chakra-ui/react";
import { InfoItem } from "./InfoItem";

interface InfoItemProps {
  isWideVersion: boolean;
}

export function Info({ isWideVersion = false }: InfoItemProps) {
  return (
    <Stack
      direction={isWideVersion ? "row" : "column"}
      spacing={["4", "16"]}
      w="90%"
      align={["start", "center", "center", "start"]}
    >
      <Box maxW="600px">
        <Text textAlign="justify" color="gray.500" fontSize={["md", "2xl"]}>
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Box>

      <HStack spacing="10">
        <InfoItem title="50" description="países" />
        <InfoItem title="60" description="línguas" />
        <InfoItem
          title="27"
          description="cidades +100"
          tooltip="Mais de 100 cidades"
        />
      </HStack>
    </Stack>
  );
}
