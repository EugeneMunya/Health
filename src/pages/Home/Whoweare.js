import { Button,Image, Flex,Heading,Text } from '@chakra-ui/react';
import React from 'react';
import Prf1 from '../../assets/prof1.jpg'
import Prf2 from '../../assets/prof2.jpg'
import Prf3 from '../../assets/prof3.jpg'
import Prf4 from '../../assets/prof4.jpg'

const Whoweare = () => {
    return (
        <Flex
        px='10%'
        py={100}
        gap={5}
        flexDir={['column','column','row']}
        >
            <Flex gap={5} w={['100%','100%','50%']} flexDir='column'>
                <Text color='#33ae84'>-WHO WE ARE</Text>
                <Heading fontSize='30px' fontFamily='inherit'>Meet Our Psychiatrist Team</Heading>
                <Text>Etiam scelerisque nec elit ac efficitur. Duis vestibulum magna
amet ante gravida malesuada. Nunc gravida dui scelerisque
libero venenatis hendrerit vestibulum euismod, lacus.</Text>

                <Button p={5} w={150} hover={{bgColor:'none'}} 
                        color='#fff' borderRadius='20px' bgColor='#33ae84'>
                            <Text fontSize='12px'>
                            MORE THERAPIES
                            </Text></Button>
            </Flex>
            <Flex gap={20} flexDir={['column','column','row']}>
                <Flex pt={50} flexDir='column' gap={10}>
    <Image className='profile'
    boxSize='200px'
    borderRadius={30}
    objectFit='cover'
    src={Prf1}
    alt='Dan Abramov'
  />
    <Image className='profile'
    boxSize='200px'
    borderRadius={30}
    objectFit='cover'
    src={Prf2}
    alt='Dan Abramov'
  />
                </Flex>
                <Flex
                flexDir='column' gap={10}
                >
    <Image className='profile'
    boxSize='200px'
    borderRadius={30}
    objectFit='cover'
    src={Prf4}
    alt='Dan Abramov'
  />
     <Image className='profile'
    boxSize='200px'
    objectFit='cover'
    src={Prf3}
    alt='Dan Abramov'
    borderRadius={30}
  />
                </Flex>
                
            </Flex>
        </Flex>
        
    );
};

export default Whoweare;