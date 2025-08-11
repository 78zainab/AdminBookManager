import { Button, Box, Flex, HStack, Text, useColorMode, useColorModeValue} from '@chakra-ui/react'
import {Link} from "react-router-dom";
import { RiBookShelfLine } from "react-icons/ri";
import {IoMoon} from "react-icons/io5";
import {LuSun} from "react-icons/lu";
// import { useProductStore } from '../store/product';


// using gradient component of chakraUI
  // const {books} = useProductStore();
 const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("blue.500", "blue.800")} // blue for light, dark gray for dark mode
      color={useColorModeValue("white", "gray.100")} // white text in light, light text in dark
      px={4}
      py={2}
      boxShadow="md"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
      <Link to="/" style={{ fontFamily: "cursive", fontWeight: "bold", fontSize: "40px" }}>
       {/* <RiBookShelfLine fontSize={40} /> */}
        Book Store             
      </Link>        
        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create"></Link>
          <Button onClick={toggleColorMode} colorScheme="gray">
            {colorMode === "light" ? <IoMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar