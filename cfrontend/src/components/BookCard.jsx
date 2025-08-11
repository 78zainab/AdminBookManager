import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack,
	Image
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useBookStore } from "../store/book";
import { useState } from "react";

const BookCard = ({ book }) => {
	const textColor = useColorModeValue("gray.800", "blue.900");
	const bg = useColorModeValue("blue.300", "gray.300");
	const editColor = useColorModeValue("white.700","red")

	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { deleteBook, updateBook } = useBookStore();

	const [updateFormData, setUpdateFormData] = useState({
		title: "",
		author: "",
		ImageURL: "",
	});

	const handleDeleteBook = async (pid) => {
		const { success, message } = await deleteBook(pid);
		toast({
			title: success ? "Deleted" : "Error",
			description: message,
			status: success ? "success" : "error",
			duration: 3000,
			isClosable: true,
		});
	};

	const handleUpdateBook = async (pid, updatedData) => {
		const {success, message} = await updateBook(pid, updateFormData);		await updateBook(pid, updatedData);
		onClose();
		if(!success) {
			toast({
				title: "error", 
				description: message, 
				status: "error",
				duration: 5000, 
				isClosable: true
			});
		}
		else{
			toast({
				title: "success", 
				description: "Book updated successfully", 
				status: "success",
				duration: 5000,
				isClosable: true
			})
		}
	};

	return (
		<Box
			shadow="lg"
			rounded="lg"
			overflow="hidden"
			transition="all 0.3s"
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
		    <Image src = {book.ImageURL} alt={book.title} height="200px" width="100%" objectFit="contain"   fallbackSrc="https://via.placeholder.com/150"></Image>
			<Box p={4}>
				<Heading as="h3" size="md" mb={2} color={textColor}>
					{book.title}
				</Heading>
				<Text fontWeight="bold" fontSize="xl" color={textColor} mb={2}>
					 {book.author}
				</Text>
				<HStack spacing={2}>
					<IconButton
						icon={<EditIcon />}
						color={editColor}
						onClick={() => {
							setUpdateFormData({
								title: book.title?.name || book.title || "",
								author: book.author?.name || book.author || "",
								ImageURL: book.ImageURL?.name|| "",
							});
							onOpen();
						}}
					/>
					<IconButton
						icon={<DeleteIcon />}
						onClick={() => handleDeleteBook(book._id)}
						colorScheme="red"
					/>
				</HStack>
			</Box>

			{/* MODAL */}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Update Book</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder="Title"
								name="title"
								value={updateFormData.title}
								onChange={(e) =>
									setUpdateFormData({
										...updateFormData,
										title: e.target.value,
									})
								}
							/>
							<Input
								placeholder="Author"
								name="author"
								value={updateFormData.author}
								onChange={(e) =>
									setUpdateFormData({
										...updateFormData,
										author: e.target.value,
									})
								}
							/>
							<Input
								placeholder="ImageURL"
								name="ImageURL"
								value={updateFormData.ImageURL}
								onChange={(e) =>
									setUpdateFormData({
										...updateFormData,
										ImageURL: e.target.value,
									})
								}
							/>
						</VStack>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="blue"
							onClick={() =>
								handleUpdateBook(book._id, updateFormData)
							}
						>
							Update
						</Button>
						<Button variant="ghost" onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default BookCard;
