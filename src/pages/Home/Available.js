import { Button, Flex, Heading,Text } from '@chakra-ui/react';
import React from 'react';
import Countup from 'react-countup'

const Available = () => {
    return (
        <Flex
        bgColor="#33ae84"
        className="avalable"
        gap={['10','10','100']}
        justify={['flex-start','flex-start','space-between']}
        px='10%'
        py={100}
        flexDir={['column','column','row']}
        >
            <Flex
            flexDir='column'
            color='#fff'
            w={400}
            gap="20px"
            pb={10}
            >
                <Text letterSpacing='normal' fontWeight='hairline' fontSize={20}>-AVAILABLE 24/7</Text>
                <Heading
                fontFamily='inherit'
                fontSize='40px'
                >We are Always Ready For A Challenge</Heading>
                <Button w={300} borderRadius={30} _hover={{color:'none'}} bgColor='#ffbc0a'>Book an appointment</Button>
            </Flex>
            <Flex 
            flexDir='column'
            gap={10}
            justify={['flex-start','flex-start','normal']}
            >
                <Flex flexDir='column' align={['flex-start','flex-start','center']} justify='center' >
                    <Heading 
                    letterSpacing='tight'
                    color="#fff"
                    fontFamily='inherit'
                    fontSize='50px'
                    >
                        <Countup end={312}  duration={8} />+
                    </Heading>
                    <Text
                    color='#ffbc0a'
                    fontSize="20px"
                    letterSpacing='tight'
                    
                    >Satisfied Customers</Text>
                </Flex>
                <Flex flexDir='column' align={['flex-start','flex-start','center']}  justify='center'>
                    <Heading
                    letterSpacing='tight'
                    color="#fff"
                     fontFamily='inherit'
                    fontSize='50px'
                    >
                        <Countup end={9}  duration={8} />+
                    </Heading>
                    <Text letterSpacing='tight' fontSize="20px" color='#ffbc0a'>Winning Awords</Text>
                </Flex>
            </Flex>

            <Flex flexDir='column' gap={10}>
                <Flex flexDir='column' align={['flex-start','flex-start','center']}  justify='center'>
                    <Heading
                    letterSpacing='tight'
                    color="#fff"
                     fontFamily='inherit'
                    fontSize='50px'
                    >
                        <Countup end={23} duration={8} />+
                    </Heading>
                    <Text letterSpacing='tight' fontSize="20px" color='#ffbc0a'>Project Completed</Text>
                </Flex>
                <Flex flexDir='column' align={['flex-start','flex-start','center']}  justify='center'>
                    <Heading
                     letterSpacing='tight'
                    color="#fff"
                     fontFamily='inherit'
                    fontSize='50px'
                    ><Countup end={23}  duration={8} />+</Heading>
                    <Text letterSpacing='tight' fontSize="20px" color='#ffbc0a'>Years of Experience</Text>
                </Flex>
            </Flex>
            
        </Flex>
    );
};

export default Available;