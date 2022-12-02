import { Flex, Heading,Text } from '@chakra-ui/react';
import React from 'react';
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'
const Quotes = () => {
    return (
        <Flex alignItems={['flex-start','flex-start','center']}
         flexDir="column"
         pb={5}
         px="10%"
         py={100}
         >
             <Heading
         textAlign={['flex-start','flex-start','center']}
         pb={5}
         fontFamily='inherit'
         >Helpful quotes</Heading>
           <Flex gap={5} flexDir='column'  bg="#fff" w={['100%','100%','80%']} p={5}
            borderRadius="8px">
            <Text
            fontStyle="italic"
            pb={5}
            fontSize="20px"
            textAlign={['center']}
            >
                The way to get started is to quit talking and begin doing. 
            </Text>
            <Heading
            textAlign={['center']}
             fontSize="16px"
            >~Walt Disney</Heading>
            <Flex justify={['center']} gap={50}>
                <BiLeftArrow/>
                <BiRightArrow/>
            </Flex>
           </Flex>
        </Flex>
    );
};

export default Quotes;