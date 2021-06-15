import { Flex, Image, Box, Icon, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";

export function Header() {
  const router = useRouter();
  const isInHome = router.pathname === "/";

  return (
    <Flex
      as="header"
      bg="gray.50"
      justify="center"
      align="center"
      h={[50, 100]}
      w="100vw"
      pos="relative"
    >
      {!isInHome && (
        <Box pos="absolute" left="0" pl={[4, 6, 8, 16, 32]}>
          <Link href="/" passHref>
            <IconButton
              as="a"
              icon={<Icon as={BsChevronLeft} />}
              aria-label="Voltar"
              fontSize={[16, 32]}
              fontWeight="bold"
              bg="transparent"
            />
          </Link>
        </Box>
      )}

      <Box w={[81, 185]}>
        <Image src="/images/Logo.svg" alt="Logo" />
      </Box>
    </Flex>
  );
}
