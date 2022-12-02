import { Divider, Flex, Heading,Image,Text } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Header/Nav';
import MapRw from '../assets/map.png'

const Contact = () => {
    return (
        <>
        <Nav/>
        <Flex
        as="section" bg="#fff"
        gap={5} 
        width="100%"
         flexDir="column"
        >
            <Flex
            bgColor='#33ae84'
            h={250}
            align={['flex-end','flex-end','center']}
            justify='center'
            color='#fff'
            fontSize='20px'
            pt='5%'
            >
         <Heading>CONTACT US</Heading>
            </Flex>


            <Flex px='10%' py='60px' flexDir={['column','column','row']}>
                <Flex gap={10} boxShadow='md' p='6' rounded='md' bg='white' w={['100%','100%','50%']} flexDir='column'>
                    <Flex flexDir='column' gap={5} >
                        <Heading fontSize='20px' fontFamily='inherit'>
                        Get in touch
                        </Heading>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text>
                        </Flex>
                        <Divider/>
                    <Flex flexDir='column' gap={3}>
                        <Flex flexDir='column' gap={3}>
                            <Heading fontSize='20px' fontFamily='inherit'>Head Office</Heading>
                            <Text>Jalan Cempaka Wangi No 22 Jakarta - Indonesia</Text>
                        </Flex>

                        <Flex gap={3} flexDir='column'> 
                            <Heading fontSize='20px' fontFamily='inherit'> Call us</Heading>
                        <Text>Phone : +6221.2002.2012</Text>
                        <Text>Fax : +6221.2002.2013</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDir='column'>
                        <Heading fontSize='20px' fontFamily='inherit'>Email us</Heading>
                        <Text>support@yourdomain.tld</Text>
                        <Text>hello@yourdomain.tld</Text>
                    </Flex>
                </Flex>

                <Flex>
                    <Image src={MapRw} boxSize='500px' objectFit='cover' alt='kigali'/>
                </Flex>
            </Flex>
        </Flex>
        <Footer/>
        </>
    );
};

export default Contact;