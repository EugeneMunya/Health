import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Header/Hero';
import Available from './Available';
import Blog from './Blog';
import Booking from './Booking';
import Books from './Books';
import Intro from './Intro';
import Quotes from './Quotes';
import Testimonials from './Testimonials';
import VideoStream from './VideoStream';
import WhatWeDo from './WhatWeDo';
import Whoweare from './Whoweare';

const Home = () => {
    return (
        <Flex as='section' 
        flexDir="column" 
        bg="#f5f5f5"
        minH="100vh"
        >
            <Header/>
            <Hero/>
            <Flex as="section" flexDir="column" >
            <WhatWeDo/>
            <Available/>
            <Intro/>
            <Whoweare/>
            <VideoStream/>
            <Blog/>
            <Books/>
            <Quotes/>
            <Testimonials/>
            <Booking/>
            </Flex>
            <Footer/>
            
        </Flex>
    );
};

export default Home;