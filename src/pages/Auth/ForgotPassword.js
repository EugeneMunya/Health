import { Button, Flex, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React from 'react';

const ForgotPassword = () => {
    return (
        <Flex 
        as="section"
         bg="#f5f5f5"
         justifyContent="center"
         h="100vh"
         alignItems="center"
         >
            
            <Flex bg="#fff"
             w="400px" 
             py={10}
             px={30}
             flexDir="column"
             alignItems="center"
             shadow="base"
             justifyContent="center"

             >
                
                <VStack w="100%" gap={5}>
                <FormControl borderColor="#5BFFB7">
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                </FormControl>
                <Button 
                bg="#76B55B" 
                color="#fff" 
                size='md' 
                width="100%"
                _hover={{textDecor:'none'}}
                >
                    Submit
                    </Button>
                     
                </VStack>
            </Flex>
        </Flex>
    );
};

export default ForgotPassword;