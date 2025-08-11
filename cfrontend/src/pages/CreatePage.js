import { motion } from 'framer-motion';
import {useState} from 'react';
import {
  Container,
  Box,
  Button,
  VStack,
  Heading,
  useColorModeValue,
  Input, 
  HStack, 
  useToast
} from '@chakra-ui/react';
import { useBookStore } from '../store/book';
import {Link} from "react-router-dom";

const CreatePage = () => {
  const [newBook, setNewBook] = useState({
    title: "",   
    author: "",
    ImageURL: ""
  });
  const toast = useToast();
  const {addBooks} = useBookStore()
  const handleAddBook = async() => {
    const {success, message} = await addBooks(newBook);
    if(!success){
      toast({
        title: "Error",
        description: message, 
        status: "error",
        duration: 3000,
        isClosable: true
      })
    }
    else{
      toast({
        title: "Succcess",
        description: message, 
        status: "success",
        duration: 3000,
        isClosable: true
      })
    }
  };

  return (
    <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0, x: window.innerWidth }}
            transition={{ duration: 0.5 }}
    >
      <Container maxW="container.sm">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontFamily="cursive">
            Add New Book
          </Heading>
          <Box
            // useColorModeValue(light, dark) chooses value based on the current color mode:
            // If you're in light mode, it uses the first value.
            // If you're in dark mode, it uses the second value.
          bg={useColorModeValue("blue.300", "blue.800")}
          color={useColorModeValue("blackAlpha.900", "black")}       
            p={6} 
            rounded={"initial"} 
            shadow={"md"}
          >
            <VStack spacing={4} >
              <Input
                placeholder="title"
                name="title" 
                value={newBook.title}
                onChange={(e) =>
                  setNewBook({ ...newBook, title: e.target.value })
                }
              />
              <Input
                placeholder="author"
                name="author"
                value={newBook.author}
                onChange={(e) =>
                  setNewBook({ ...newBook, author: e.target.value })
                }
              />
              <Input
                placeholder="ImageURL"
                name="ImageURL"

                value={newBook.ImageURL}
                onChange={(e) =>
                  setNewBook({ ...newBook, ImageURL: e.target.value })
                }
              />
              <HStack>
              <Button colorScheme="purple"  onClick={handleAddBook} mt={4}>
                Add Book 
              </Button>
              <Link to="/">
              <Button colorScheme="purple"  mt={4}>
                ⬅️ Back to Home
              </Button>
              </Link>
            </HStack>
            </VStack>

          </Box>
        </VStack>
      </Container>
    </motion.div>
  );
};

export default CreatePage;
