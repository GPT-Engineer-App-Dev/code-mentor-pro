import { Container, Text, VStack, Box, Heading, Button, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to CodeMaster</Heading>
          <Text fontSize="xl">Your journey to becoming a coding master starts here.</Text>
        </Box>
        <Box display="flex" justifyContent="space-around" flexWrap="wrap">
          <Box textAlign="center" p={4} borderWidth={1} borderRadius="lg" width="250px" m={2}>
            <FaCode size="3em" />
            <Heading as="h3" size="lg" mt={4}>Learn to Code</Heading>
            <Text mt={2}>Interactive lessons and challenges to help you learn programming.</Text>
          </Box>
          <Box textAlign="center" p={4} borderWidth={1} borderRadius="lg" width="250px" m={2}>
            <FaLaptopCode size="3em" />
            <Heading as="h3" size="lg" mt={4}>Practice Projects</Heading>
            <Text mt={2}>Build real-world projects to apply your knowledge.</Text>
          </Box>
          <Box textAlign="center" p={4} borderWidth={1} borderRadius="lg" width="250px" m={2}>
            <FaChalkboardTeacher size="3em" />
            <Heading as="h3" size="lg" mt={4}>Expert Guidance</Heading>
            <Text mt={2}>Get help from experienced mentors and join a community of learners.</Text>
          </Box>
        </Box>
        <Box textAlign="center" mt={8}>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;