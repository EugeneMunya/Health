import { Flex, Heading,Text} from '@chakra-ui/react';
import './header.css'
import bgImage from '../../assets/hero.jpg'
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <Flex as='section'
        flexDir="column" 
        bg="#000"
        bgImage={bgImage}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        px="10%"
        pt={60}
        gap={[4,4,8]}
        >
            <Heading
            letterSpacing="tight"
            fontSize={['20px','20px','40px']}
            color='#fff'
            alignSelf="flex-start"
            maxW="600px"
            fontFamily='inherit'
            h={['auto','auto',null]}
            >Make your mental health a priority</Heading>
            <Text
            letterSpacing="tight"
            fontSize={['16px','16px','20px']}
            color='#fff'
            alignSelf="flex-start"
            
            >Take care of your mental health right now</Text>
            <Flex gap={['2','2','8']}
            className="hero_nav"
            flexDir={['column','column','row']}
            >
            <Link to='/'>Join Group Session</Link>
            <Link to='/survey'>Take Survey</Link>
            </Flex>         
        </Flex>
    );
};

export default Hero;