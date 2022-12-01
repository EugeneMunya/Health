import { Button, Flex, Heading, Image, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import BookingImg from '../../assets/booking.png'

const Booking = () => {
    return (
        <Flex
        h={400}
        align='center'
        justify='center'
        >
            <Flex flexDir='column'  gap={5}>
                <Text >-REACHOUT</Text>
                <Heading fontSize='30px' fontFamily='inherit'>Book An Appointment Now</Heading>
                <Flex flexDir='column' gap={5}>
                    <Input placeholder='name' borderColor='#33ae84'/>
                     <Input placeholder='name' borderColor='#33ae84'/>
                     <Textarea placeholder='message' borderColor='#33ae84'></Textarea>
                     <Button color='#fff' bgColor='#33ae84'>Book Now</Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Booking;