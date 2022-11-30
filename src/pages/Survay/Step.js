import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Step = (props) => {
    const {children,color,...rest}=props
    return (
        <Box display='flex' 
            alignItems="center" 
            justifyContent='center'
            flexDir="column" 
            fontSize={10} 
            color="#fff"
            bg={color} 
            w={50}
             h={50} 
             borderRadius="50%"
             {...rest}
             >
                <Heading>{children}</Heading>
            </Box>
    );
};

export default Step;