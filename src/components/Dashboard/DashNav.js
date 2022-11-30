import { Avatar, Flex, Heading, IconButton, Select } from '@chakra-ui/react';
import React from 'react';
import { FaBell, FaCaretDown, FaGlobe } from 'react-icons/fa';

const DashNav = () => {
    return (
        <Flex 
        alignItems='center' 
        justifyContent={['center','center','flex-end']} 
        w='100%'
        px={50}
        gap={5}
        borderBottom="1px solid #91B572"
        py='6px'
        flexDir={['column','column','row']}
        >
            <Flex alignItems='center'>
            <IconButton icon={<FaBell size={20} color='red'/>}
            borderRadius='50%'
            size='sm'
            />
            <Flex
            w='20px'
            h='20px'
            bgColor='purple.600'
            borderRadius='50%'
            align='center'
            justify='center'
            color='#fff'
            zIndex="100"
            fontSize='12px'
            mt='-20px'
            ml='-10px'
            >
                2
            </Flex>
            </Flex>
            
           
           <Flex gap={2} alignItems='center'>
            <FaGlobe size={20} color='gray'/>
            <Select variant='unstyled' w='auto'>
                <option>English</option>
                <option>Kinyarwanda</option>
            </Select>
           </Flex>

            <Flex alignItems='center' gap={2} pl={10}>
                <Heading fontSize='15px'>Eugene</Heading>
                <Avatar/>
                <FaCaretDown size={25} color='gray'/>
            </Flex>
            
            
        </Flex>
    );
};

export default DashNav;