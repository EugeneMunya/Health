import { Flex, Heading, Icon, Stat, StatHelpText, StatLabel } from '@chakra-ui/react';
import React from 'react';
import {BsPeopleFill} from 'react-icons/bs'
import BarChart from '../Chart/BarChart';

const DashHome = () => {
    return (
        <Flex
        flexDir='column'
        h='100vh'
        >
            <Flex
            gap={5}
            >
            <Stat 
            bgColor='gray.100'
            color='#332E33'
            boxShadow='base'
            pl={2}
            h="80px"
            >
            <StatLabel >
                <Icon mr={2}  as={BsPeopleFill}/>
                Kigali
                </StatLabel>
            <Heading as='h5' fontSize='13px' py={2}>10 people</Heading>
            <StatHelpText>in year 2022</StatHelpText>
            </Stat>


           <Stat 
            bgColor='gray.100'
            color='#332E33'
            boxShadow='base'
            pl={2}
            h="80px"
            >
            <StatLabel >
                <Icon mr={2}  as={BsPeopleFill}/>
                Northern province
                </StatLabel>
            <Heading as='h5' fontSize='13px' py={2}>5 people</Heading>
            <StatHelpText>in year 2022</StatHelpText>
            </Stat>


          <Stat 
            bgColor='gray.100'
            color='#332E33'
            boxShadow='base'
            pl={2}
            h="80px"
            >
            <StatLabel >
                <Icon mr={2}  as={BsPeopleFill}/>
                Eastern province
                </StatLabel>
            <Heading as='h5' fontSize='13px' py={2}>7 people</Heading>
            <StatHelpText>in year 2022</StatHelpText>
            </Stat>

          <Stat 
            bgColor='gray.100'
            color='#332E33'
            boxShadow='base'
            pl={2}
            h="80px"
            >
            <StatLabel >
                <Icon mr={2}  as={BsPeopleFill}/>
                Wester province
                </StatLabel>
            <Heading as='h5' fontSize='13px' py={2}>3 people</Heading>
            <StatHelpText>in year 2022</StatHelpText>
            </Stat>


           <Stat 
            bgColor='gray.100'
            color='#332E33'
            boxShadow='base'
            pl={2}
            h="80px"
            >
            <StatLabel >
                <Icon mr={2}  as={BsPeopleFill}/>
                Southern Pronvince
                </StatLabel>
            <Heading as='h5' fontSize='13px' py={2}>2 people</Heading>
            <StatHelpText>in year 2022</StatHelpText>
            </Stat>

            </Flex>


            <Flex  flexDir='column'>
                <BarChart/>
            </Flex>

            <Flex>Questions</Flex>
        </Flex>
    );
};

export default DashHome;