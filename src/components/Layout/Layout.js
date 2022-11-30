import React from 'react';
import Routers from '../../Routers/Routers';
import { Box, Flex } from '@chakra-ui/react';

const Layout = () => {
    return (
        <Flex flexDir="column">
           
            <Box h="100%" display="flex" flexDir="column">
                <Routers/>
            </Box>
            
        </Flex>
        
    );
};

export default Layout;