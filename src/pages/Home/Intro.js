import { Button, Flex,Heading,Skeleton,Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import ReactPlayer from 'react-player'


const Intro = () => {
    return (
        <Flex
        px='10%'
        gap={100}
        py={50}
        >
            <Flex w='60%' >
              <ReactPlayer width='100%' url='https://www.youtube.com/watch?v=jh9k2Kg53Rs' />
            </Flex>

            <Flex gap={10} flexDir='column'
            >
               <Flex flexDir='column' >
                 <Text color='#33ae84' >-WHY WE ARE</Text>
                <Heading fontSize='30px' fontFamily='inherit'>Why Choose Us</Heading>
                <Text>Mauris cursus posuere sem non fermentum donec condime ntum, nibh ut viverra molestie, urna dui convallis 
                    tortor, sed dignissim arcu ex sed</Text>
               </Flex>
                    <Flex gap={20} align='center'>
                        <Flex flexDir='column'>
                            {/* one part */}
                            <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                                Bipolar Disorders
                            </Flex>
                            <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                                Anxiety Therapy
                            </Flex>
                             <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                               Stress Management
                            </Flex>
                            <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                               Executive Coaching
                            </Flex>
                            <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                               Depression Therapy
                            </Flex>

                        </Flex>
                        <Flex flexDir='column'>
                           {/* second  */}
                            <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                               Relationship Therapy
                            </Flex>
                            <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                               Family Therapy
                            </Flex>
                            <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                               Curing Addictions
                            </Flex>
                            <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                               Emergency Services
                            </Flex>
                            <Flex gap={3}>
                                <AiFillCheckCircle color='#33ae84'/>
                               Brief Therapy
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex>
                        
                        <Button _hover={{bgColor:'none'}} 
                        color='#fff' borderRadius='20px' bgColor='#33ae84'>Read More</Button>
                    </Flex>
            </Flex>
        </Flex>
    );
};

export default Intro;