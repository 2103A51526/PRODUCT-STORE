import { Container, Button, HStack, Text, Flex, useColorMode } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems="center">
          <Link to="/create">
            <Button
              bgGradient="linear(to-r, cyan.300, blue.400)"
              color="white"
              fontSize="25px"
              _hover={{
                bgGradient: "linear(to-r, cyan.300, blue.300)"
              }}
            >
              +
            </Button>
          </Link>
          <Button
            onClick={toggleColorMode}
            bgGradient="linear(to-r, cyan.300, blue.400)"
            color="white"
            fontSize="20px"
            _hover={{
              bgGradient: "linear(to-r, cyan.300, blue.600)"
            }}
          >
            {colorMode === "light" ? <IoMoon fontSize="20px" /> : <LuSun fontSize="20px" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
