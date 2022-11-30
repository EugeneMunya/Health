import { Flex, Heading, VStack,Text } from '@chakra-ui/react';
import React from 'react';
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'
const Quotes = () => {
    return (
        <Flex alignItems="center"
         flexDir="column"
         pb={5}
         px="10%"
         >
             <Heading
         textAlign={['flex-start','flex-start','center']}
         pb={5}
         color="#28a745"
         >Helpful quotes</Heading>
           <VStack bg="#fff" w="60%" p={5}
            borderRadius="8px">
            <Text
            fontStyle="italic"
            pb={5}
            fontSize="20px"
            >
                The way to get started is to quit talking and begin doing. 
            </Text>
            <Heading
             fontSize="16px"
            >~Walt Disney</Heading>
            <Flex gap={50}>
                <BiLeftArrow/>
                <BiRightArrow/>
            </Flex>
           </VStack>
        </Flex>
    );
};

export default Quotes;