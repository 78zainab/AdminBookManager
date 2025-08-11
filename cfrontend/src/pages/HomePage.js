import { Button, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBookStore } from "../store/book";
import BookCard from "../components/BookCard";
import { motion } from "framer-motion";

const HomePage = () => {
	const {fetchBooks, books} = useBookStore();
	useEffect(() => {
		fetchBooks();
	}, [fetchBooks]);
	console.log("books", books);
	return (
		<motion.div 
		    initial={{opacity:0}}
			animate={{opacity:1}}
			exit={{opacity:0}}>
			<Container maxW='container.xl' py={12} >
				<VStack spacing={8}>
					<Text
						fontSize={"50"}
						fontWeight={"bold"}
						bgGradient={"linear(to-r, orange.400, yellow.300)"}
						bgClip={"text"}
						textAlign={"center"}
						fontFamily={"-moz-initial"}
						>
						Your Books 
					</Text>
					<Link to="/create">
					<Button 
						colorScheme="blue" 
						variant="outline"
						fontSize="lg" 
						fontFamily="cursive"
						rightIcon={<span>😊</span>}
					>
					Click me to add a new book
					</Button>
					</Link>

			<SimpleGrid 
				columns={{
					base: 1, md: 2, lg: 3
				}}
				spacing={10}
				w={"full"}
			>
				{books.map((book) => (
				<BookCard key={book._id} book={book} />
				))}
			</SimpleGrid>
				</VStack>
			</Container>
		</motion.div>
	);
};
export default HomePage;