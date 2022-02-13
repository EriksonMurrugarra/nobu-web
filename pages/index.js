
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
  Box,
  Center,
  Container, Divider,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack
} from "@chakra-ui/react";
import Head from "next/head"
import styles from "../styles/landing.module.css"

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Nobu</title>
      </Head>
      {/*Header*/}
      <Box className={styles.MainBanner} pb={10} pt={4}>
        <Container maxWidth={"container.lg"}>
          <Heading fontSize={"2xl"} color={"white"}>Nobu</Heading>
          <Container mt={10} color={"whitesmoke"}>
            <Heading fontSize={"md"}>Cualquiera puede escribir codigo que un computador puede entender... <br/>
              Solo los grandes escriben codigo que los humanos pueden entender.</Heading>
            <Text mt={6} fontSize={"sm"} color={"gray.100"}> - Martin Fowler - </Text>
          </Container>
        </Container>
      </Box>
      {/*End Header*/}
      {/*Ruta*/}
      <Container pt={6} maxWidth={"container.lg"}>
        <VStack spacing={0}>
          <Heading fontSize={"lg"}>Ruta</Heading>
          <Text>Algunos temas a tratar:</Text>
        </VStack>
        <Divider mt={4}/>
        <SimpleGrid columns={[1, 2, null, 4]} mt={10} gap={10} w={"full"}>
          <VStack>
            <Heading fontSize={"sm"} color={"#074061"}>Fundamentals</Heading>
            <UnorderedList>
              <ListItem fontSize={"sm"}>Principles (SOLID + YAGNI)</ListItem>
              <ListItem fontSize={"sm"}>Object Oriented Programming</ListItem>
              <ListItem fontSize={"sm"}>Design Patterns</ListItem>
              <ListItem fontSize={"sm"}>Clean Code & Refactoring</ListItem>
              <ListItem fontSize={"sm"}>Defensive Coding</ListItem>
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading fontSize={"sm"} color={"#074061"}>Testing</Heading>
            <UnorderedList>
              <ListItem fontSize={"sm"}>Testing Principles</ListItem>
              <ListItem fontSize={"sm"}>Testing Design</ListItem>
              <ListItem fontSize={"sm"}>Quality Attributes</ListItem>
              <ListItem fontSize={"sm"}>Test Pyramid</ListItem>
              <ListItem fontSize={"sm"}>Test Driven Development</ListItem>
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading fontSize={"sm"} color={"#074061"}>Domain Driven Engineering</Heading>
            <UnorderedList>
              <ListItem fontSize={"sm"}>Domain Driven Design</ListItem>
              <ListItem fontSize={"sm"}>Hexagonal Architecture</ListItem>
              <ListItem fontSize={"sm"}>Clean Architecture</ListItem>
              <ListItem fontSize={"sm"}>Event Drive Architectures</ListItem>
              <ListItem fontSize={"sm"}>Event Storming</ListItem>
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading fontSize={"sm"} color={"#074061"}>Distributed Systems</Heading>
            <UnorderedList>
              <ListItem fontSize={"sm"}>Microservices</ListItem>
              <ListItem fontSize={"sm"}>Enterprise Integration Patterns</ListItem>
              <ListItem fontSize={"sm"}>Security</ListItem>
              <ListItem fontSize={"sm"}>Cloud Native</ListItem>
              <ListItem fontSize={"sm"}>Containers</ListItem>
            </UnorderedList>
          </VStack>
        </SimpleGrid>
      </Container>
      <Divider mt={10}/>
      {/*End Ruta*/}
      {/*FAQ*/}
      <Box background={"gray.50"} py={10}>
        <VStack spacing={0}>
          <Heading fontSize={"lg"}>FAQ</Heading>
          <Text>Preguntas frecuentes:</Text>
        </VStack>
        <Container maxWidth={"container.md"} mt={6}>
          <Accordion>
            <AccordionItem>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize={"md"}>Pregunta 1?</Heading>
                </Box>
                <AccordionIcon/>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text fontSize={"md"}>Respuesta 1</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize={"md"}>Pregunta 2?</Heading>
                </Box>
                <AccordionIcon/>
              </AccordionButton>
              <AccordionPanel pb={4}>
                Respuesta 2
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>
      {/*End FAQ*/}
      {/*Footer*/}
      <Center mt={6}>
        <Text fontSize={"sm"} color={"gray"}>Ⓒ Nobu 2022. PE / NL</Text>
      </Center>
      {/*End Footer*/}
    </>
  )
}
