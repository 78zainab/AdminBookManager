import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import OIP from "../assets/OIP.jpg"

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.7), rgba(42, 82, 152, 0.7)), url(${OIP})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Box textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" color="white">
          Welcome to  BookStore 📚
        </Text>
      </Box>
    </motion.div>
  );
};

export default WelcomePage;
