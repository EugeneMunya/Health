import { PhoneIcon } from '@chakra-ui/icons';
import { Flex, Heading, Text,Link } from '@chakra-ui/react';
import React from 'react';
import {BsFacebook,BsTwitter,BsInstagram,BsYoutube} from 'react-icons/bs'
import { FaEnvelope, FaMapMarker } from 'react-icons/fa';
const Footer = () => {
    return (
       <Flex 
       flexDir='column'
       >
        <Flex color='#fff' bgColor='#33ae84' gap={10} p='20px'>
            <Flex gap={5} flexDir='column' w={400}>
                <Heading fontSize='18px' fontFamily='inherit'>BAHO</Heading>
                <Text>
                    in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.
                </Text>
                <Flex gap={5}>
                    <BsFacebook size={30}/>
                    <BsTwitter size={30}/>
                    <BsInstagram size={30}/>
                    <BsYoutube size={30}/>
                </Flex>
            </Flex>

            <Flex flexDir='column' gap={5} >
                <Heading fontSize='18px' fontFamily='inherit'>Useful Links</Heading>
                <Flex flexDir='column' gap={3}>
                    <Link>Situation Reports</Link>
                    <Link>Advice For Public </Link>
                    <Link>Prevention</Link>
                    <Link>Donor & Partners</Link>
                </Flex>
            </Flex>
            
            <Flex flexDir='column' gap={5}>
                <Heading fontSize='18px' fontFamily='inherit'>Popular Services</Heading>
              <Flex flexDir='column'>
                <Link>Bipolar Disorders</Link>
               <Link>Anxiety Therapy</Link> 
               <Link>Stress Management</Link>
               <Link>Executive Coaching</Link>
               <Link>Family Therapy</Link>
               <Link>Curing Addictions</Link>
               <Link>Emergency Services</Link>
               <Link>Brief Therapy</Link>
              </Flex>
            </Flex>

            <Flex flexDir='column' gap={5}>
                <Heading fontSize='18px' fontFamily='inherit'>Contact us</Heading>
                <Flex gap={2} align='center'>
                    <FaMapMarker/>
                    <Text>121 King St, Melbourne VIC 3000, Australia</Text>
                </Flex >
                <Flex gap={2} align='center'>
                    <FaEnvelope/>
                    <Text>info@example.com</Text>
                </Flex>
                 <Flex gap={2} align='center'>
                    <PhoneIcon/>
                    <Text>+250758574887</Text>
                </Flex>
            </Flex>

        </Flex>


        <Flex h='60px' justify='center' align='center'>
            <Text>Copyright © 2023 KLAB All rights reserved</Text>
        </Flex>
       </Flex>
    );
};

export default Footer;