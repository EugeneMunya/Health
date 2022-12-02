import {  Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'
import Trick from '../../assets/triks.jpg'
import Tips from '../../assets/tips.jpg'
const Blog = () => {
    return (
        <Flex 
        px="10%"
        flexDir="column"

        py={100} 
        gap={[10,10,20]}
        >

          <Flex gap={4} flexDir='column' align={['flex-start','flex-start','center']}>
            <Text color='#33ae84'>-RECENT BLOG</Text>
          <Heading fontFamily='inherit' fontSize='30px'>Get Latest Tips & Tricks</Heading>
          </Flex>

            <Flex
            flexDir={['column','column','row']}
            gap={[2,2,5]}
            >
      <Card maxW={['100%','100%',300]}bg="#fff">
        <CardBody>
    <Image
      src={Trick}
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

<Card maxW={['100%','100%',300]}  bg="#fff">
  <CardBody>
    <Image
      src={Tips}
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
<Card maxW={['100%','100%',300]}  bg="#fff">
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
    <Flex gap={20} justifyContent={['space-between','space-between','center']}>
    <BiLeftArrow/>
   <BiRightArrow/>
</Flex>
      
</Flex>
    );
};

export default Blog;