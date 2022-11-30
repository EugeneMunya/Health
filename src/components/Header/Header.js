import { Flex } from '@chakra-ui/react';
import React from 'react';
import './header.css'
import Nav from './Nav'
const Header = () => {
    return (
        <Flex as="section" flexDir='column'>
            <Nav/>
        </Flex>
    );
};

export default Header;