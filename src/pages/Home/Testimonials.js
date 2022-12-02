import { Avatar, Flex,Heading,Text,Image, WrapItem } from '@chakra-ui/react';
import {GoPrimitiveDot} from 'react-icons/go'
import React from 'react';

const Testimonials = () => {
    return (
        <Flex
        h={500}
        bgColor='#33ae84'
        align={['flex-start','flex-start','center']} 
        justify={['flex-start','flex-start','center']}
        flexDir='column'
        px={['10%','10%',400]}
        py={100}
        gap={10}
        >
            <Flex flexDir='column' color='#fff' gap={[10,10,8]}>
                <Flex  gap={5} flexDir='column'>
                <Text fontFamily='inherit'>-TESTIMONIALS</Text>
                <Heading fontFamily='inherit' fontSize='30px'>Our Happy Clients</Heading>

                <Flex pt={50}>
                    <Text textAlign='left'>Contrary to p
                    opular be
                    Contrary to popular belief, Lorem 
                    Contrary to popular belief, Lorem 
                    lief, Lorem Ipsum is not simply random text.</Text>
                </Flex>
            </Flex>
                
                <Flex gap={3}  >
                    <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </WrapItem>
  <WrapItem>

  </WrapItem>
     <Flex flexDir='column'>
     <Heading  fontSize={16}>John</Heading>
    <Text>Art Director</Text>
                    </Flex>
                </Flex>
        
            </Flex>
            <Flex align={['center']} justify={['center','center']}>
                <GoPrimitiveDot color='rgba(229, 229, 229, 0.813)'/>
                <GoPrimitiveDot color='#fff'/>
                <GoPrimitiveDot color='#fff'/>
                
            </Flex>
        </Flex>
    );
};

export default Testimonials;