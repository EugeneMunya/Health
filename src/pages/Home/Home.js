import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Header/Hero';
import Blog from './Blog';
import Books from './Books';
import Quotes from './Quotes';
import VideoStream from './VideoStream';
import WhatWeDo from './WhatWeDo';

const Home = () => {
    return (
        <Flex as='section' 
        flexDir="column" 
        bg="#f5f5f5"
        minH="100vh"
        >
            <Header/>
            <Hero/>
            <Flex as="section" gap={50} flexDir="column" >
            <WhatWeDo/>
            <VideoStream/>
            <Blog/>
            <Books/>
            <Quotes/>
            </Flex>
            <Footer/>
            
        </Flex>
    );
};

export default Home;