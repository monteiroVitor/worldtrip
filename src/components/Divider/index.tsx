import { Box } from "@chakra-ui/react";

export function Divider() {
  return (
    <Box
      as="span"
      w={["60px", "90px"]}
      borderColor="gray.500"
      borderWidth="1px"
      maxH="3px"
    />
  );
}
