import {  Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'

const Blog = () => {
    return (
        <Flex flexDir="column"  
        p={5}>
    <Heading
         textAlign="center"
         pb={5}
         color="#28a745"
         >Our blog</Heading>

            <Flex
             w="auto"
            justifyContent="center"
            alignItems="center"
            flexDir={['column','column','row']}
            gap={5}
            >
 <Card maxW='300px'
 bg="#fff"
 >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage .........
      </Text>
    </Stack>
  </CardBody>
</Card>

<Card maxW='300px'  bg="#fff">
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage .........
      </Text>
    </Stack>
  </CardBody>
</Card>
<Card maxW='300px'  bg="#fff">
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage .........
      </Text>
    </Stack>
  </CardBody>
</Card>
</Flex> 
    <Flex gap={50} pt={10} justifyContent="center">
    <BiLeftArrow/>
   <BiRightArrow/>
</Flex>
      
</Flex>
    );
};

export default Blog;