import { Flex,Heading,Text,Image, Stack } from '@chakra-ui/react';
import React from 'react';
import {FaChild,FaUserCheck,FaUsers} from 'react-icons/fa'
import Talk from '../../assets/couseling.jpg';



    

const WhatWeDo = () => {

    return (
        <Flex bg="white"flexDir={["column","column","row"]}
        px="10%"
        py={5}
        gap={50}
        >
            <Flex bg="#f5f5f5" maxW={["100%","100%","100%"]}>
            <Image
    boxSize={["700","700","auto"]}
    objectFit='cover'
    borderRadius={5}
    src={Talk}
    alt='counselling'
    boxShadow="base"
  />
 </Flex>
            
<Flex flexDir="column" 
            p={[10,10,10]}
             maxW={["100%","100%","100%"]}
             gap={5}
             >
                <Text
                  letterSpacing="tight"
                    fontSize="13px"
                    fontWeight="600"
                    color="#28a745"
                    textTransform="uppercase"
                >WhatWeDo</Text>
                <Heading
                letterSpacing="tight"
                    fontSize="25px"
                    fontWeight="700"
                    color="#303"
                    pb={5}
                >
                    The best counselling from best psychologists
                </Heading>
            <Stack flexDir="row" 
            gap={5}
            shadow="base"
            p={2}
             >
                <FaChild color='#28a745' size={50}/>
                <Flex flexDir="column">
                    <Heading
                    letterSpacing="tight"
                    fontSize="20px"
                    fontWeight="600"
                    color="#303"
                    >Children Therapy</Heading>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                </Flex>
            </Stack>


              <Stack flexDir="row"
               gap={5}
               shadow="base"
               p={2}
               >
                <FaUserCheck color='#28a745' size={50}/>
                <Flex flexDir="column">
                    <Heading
                    letterSpacing="tight"
                    fontSize="20px"
                    fontWeight="600"
                    color="#303"
                    >Individual Coaching</Heading>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                </Flex>
            </Stack>
              <Stack flexDir="row" 
              gap={5}
              shadow="base"
              p={2}
              >
                <FaUsers color='#28a745' size={50}/>
                <Flex flexDir="column">
                    <Heading
                    letterSpacing="tight"
                    fontSize="20px"
                    fontWeight="600"
                    color="#303"
                    >Couple Therapy</Heading>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                </Flex>
            </Stack>
             </Flex>
           
        </Flex>
    );
};

export default WhatWeDo;