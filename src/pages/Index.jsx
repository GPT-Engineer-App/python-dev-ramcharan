import { Container, VStack, Text, Heading, Link, IconButton, HStack, Box, Image } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box boxSize="150px">
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNvZnR3YXJlJTIwZGV2ZWxvcGVyfGVufDB8fHx8MTcxNTY5MzQzOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Ramcharan Reddy" />
        </Box>
        <Heading as="h1" size="xl">
          Ramcharan Reddy
        </Heading>
        <Text fontSize="lg">Python Developer</Text>
        <Text>
          Email: <Link href="mailto:mr.ramcharanreddy@gmail.com">mr.ramcharanreddy@gmail.com</Link>
        </Text>
        <Text>Contact: +91 6385655711</Text>
        <HStack spacing={4}>
          <Link href="https://www.linkedin.com/in/your-linkedin-profile" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://github.com/your-github-profile" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://leetcode.com/your-leetcode-profile" isExternal>
            <IconButton aria-label="LeetCode" icon={<FaCode />} size="lg" />
          </Link>
        </HStack>
        <Heading as="h2" size="md" mt={6}>
          Experience
        </Heading>
        <Text textAlign="center">I have extensive experience in developing scalable and efficient Python applications. My expertise includes working with frameworks such as Django and Flask, and I have a strong background in data analysis and machine learning.</Text>
        <Heading as="h2" size="md" mt={6}>
          Tech Stack
        </Heading>
        <Text textAlign="center">Python, Django, Flask, NumPy, Pandas, Scikit-Learn, TensorFlow, SQL, Git, Docker</Text>
      </VStack>
    </Container>
  );
};

export default Index;
