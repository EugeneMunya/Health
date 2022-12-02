import { Card, CardBody, Flex,Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import './home.css'
import {FaBook} from 'react-icons/fa'
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'

const Books = () => {
    return (
          <Flex 
        flexDir="column"
        px='10%'
        gap={[10,10,20]}
        >
         <Heading
         fontSize='30px'
         fontFamily='inherit'
         letterSpacing="tight"
         textAlign={['left','left','center']}
         >Selfhelp books </Heading>


        <Flex 
          color="#fff" 
          gap={5} 
          pt={10}
          flexDir={['column','column','row']}
          >
              <Card maxW={250} h={300} bg="#fff">
  <CardBody className='book_card'>
    <HStack gap={2}>
        <FaBook color='#33ae84' size="60px"/>
        <Heading 
        letterSpacing="tight"
        fontSize="16px"
        >View a summary of all your customers.</Heading>
    </HStack>
    <Text pt={5}>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.
    </Text>
    <a href="/images/myw3schoolsimage.jpg" download="w3logo">Download</a>
  </CardBody>
</Card>

    <Card maxW={250} h={300} bg="#fff">
  <CardBody className='book_card'>
    <HStack gap={2}>
        <FaBook color='#33ae84' size="60px"/>
        <Heading 
        letterSpacing="tight"
        fontSize="16px"
        >View a summary of all your customers.</Heading>
    </HStack>
    <Text pt={5}>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.
    </Text>
    <a href="/images/myw3schoolsimage.jpg" download="w3logo">Download</a>
  </CardBody>
</Card>
   <Card maxW={250} h={300} bg="#fff">
  <CardBody className='book_card'>
    <HStack gap={2}>
        <FaBook color='#33ae84' size="60px"/>
        <Heading 
        letterSpacing="tight"
        fontSize="16px"
        >View a summary of all your customers.</Heading>
    </HStack>
    <Text pt={5}>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.
    </Text>
    <a href="/images/myw3schoolsimage.jpg" download="w3logo">Download</a>
  </CardBody>
</Card>
   <Card maxW={250} h={300} bg="#fff">
  <CardBody className='book_card'>
    <HStack gap={2}>
        <FaBook color='#33ae84' size="60px"/>
        <Heading 
        letterSpacing="tight"
        fontSize="16px"
        >View a summary of all your customers.</Heading>
    </HStack>
    <Text pt={5}>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.
    </Text>
    <a href="/images/myw3schoolsimage.jpg" download="w3logo">Download</a>
  </CardBody>
</Card>
  </Flex>
      
<Flex gap={50} justifyContent={['flex-start','flex-start','center']}>
    <BiLeftArrow/>
   <BiRightArrow/>
</Flex>
         
        </Flex>
    );
};

export default Books;