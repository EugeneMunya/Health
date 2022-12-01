import { Button, Card, CardBody, Flex,Heading,Image,Stack,Text } from '@chakra-ui/react';
import React from 'react';
import serviceImg from '../assets/services.jpg'
import Footer from '../components/Footer/Footer';
import Nav from '../components/Header/Nav';
import Couple from '../assets/couple.jpg'
import Kids from '../assets/child.jpg'
import Family from '../assets/familly.jpg'
import Depression from '../assets/depresion.jpg'
import Onep from '../assets/onep.jpg'

const Services = () => {
    return (
        <>
        <Nav/>
        <Flex
        as="section" bg="#fff" 
        width="100%"
         flexDir="column"
        >
            <Flex
            bgColor='#33ae84'
            h={250}
            align='center'
            justify='center'
            color='#fff'
            fontSize='20px'
             pt='5%'
            >
             <Heading>OURSERVICES</Heading>
         </Flex>
        
       <Flex
       as="section" bg="#fff"
        gap='100px' 
        width="100"
        px='10%'
        py={50}
        flexDir='column'
       >
        <Flex gap={10}>
        <Flex flexDir='column' gap={5}>
            <Text color="#33ae84">OUR SERVICES</Text>
            <Heading fontSize='25px' fontFamily='inherit'>We want you to get the care you deserve.</Heading>
            <Text>Felis etiam cras dolor urna elit massa. Dictum amet eros libero natoque rutrum condimentum commodo magna feugiat et. Viverra metus felis blandit egestas nullam.</Text>
            <Button color="#fff" w={300} borderRadius={30} _hover={{color:'none'}} bgColor='#33ae84'>Discover more</Button>

        </Flex>
        <Flex>
            <Image src={serviceImg}/>
        </Flex>
        </Flex>


        <Flex justify='center' align='center' flexDir='column' gap={10}>
            <Flex gap={5} w={600} justify='center' align='center' flexDir='column'>
                <Text color='#33ae84'>WHAT WE OFFER</Text>
                <Heading fontSize='30px' fontFamily='inherit' textAlign='center'>Get treatment for all your mental healthcare needs.</Heading>
            </Flex>
            <Flex>
     

       <Card maxW='300px'bg="#fff">
        <CardBody>
    <Image
      src={Onep}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Individual Therapy</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage .........
      </Text>
    </Stack> </CardBody></Card>
       <Card maxW='300px'bg="#fff">
        <CardBody>
    <Image
      src={Kids}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Children Therapy</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage .........
      </Text>
    </Stack> </CardBody></Card>
    
       <Card maxW='300px'bg="#fff">
        <CardBody>
    <Image
      src={Couple}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Couple Therapy</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces .........
      </Text>
    </Stack> </CardBody></Card>
            </Flex>
        
       </Flex>
       </Flex>
       </Flex>
       <Footer/>
       </>
    );
};

export default Services;