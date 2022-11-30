import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import {BsFacebook,BsTwitter,BsInstagram,BsYoutube} from 'react-icons/bs'
const Footer = () => {
    return (
        <Flex as="footer" 
        height={200} 
        bg="#91B572"
         maxW="100%" 
         flexDir="column"
         gap={10}
         alignItems="center"
         justifyContent="center"
         color="#fff"
         mt="auto"
         >
        <Text maxW={400}>
            This sofa is perfect for modern tropical spaces, 
            baroque inspired spaces, earthy toned spaces and for
             people who love a chic design with a sprinkle of vintage
        </Text>
        <Flex gap={5}>
            <BsFacebook color='#fff' size={30}/>
            <BsTwitter color='#fff' size={30}/>
            <BsInstagram color='#fff' size={30}/>
            <BsYoutube color='#fff' size={30}/>
        </Flex>

        </Flex>
    );
};

export default Footer;