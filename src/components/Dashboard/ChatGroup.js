import {Text, Avatar, Button, Flex, Heading, Textarea, Divider, Spinner } from '@chakra-ui/react';
import React, { Fragment, useState } from 'react';
import { AiOutlineUser,AiOutlineSend } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useAllMessageQuery, useWriteMessageMutation } from '../../resources/MhealthApi';

const ChatGroup = () => {

    const {data:messages,isLoading,refetch,isFetching}=useAllMessageQuery()

    const [writeMessage,{isSuccess,error}]=useWriteMessageMutation()

    const user = useSelector((state)=>state.auth.user)
    const {id}=user
    console.log(id)
    const [message,setMessage]=useState('')

    const handleSubmit=()=>{
        writeMessage({userId:id,gId:1,message:message})
        setMessage(' ')
        refetch()
    }
    console.log(error)
    return (
        <Flex
        pb={20}
        h='80vh'
        w='100%'
        px={10}
        gap={5}
        border='1px solid gray'
        overflow='hidden'
        >
            
            <Flex
            w='70%'
            h={500}            
            justifyContent='space-between'
            flexDir='column'
          py={5}
           
            >
                <Flex flexDir='column'
                overflowY='auto'
                px={10}
                py={5}
               
                >
                    <Flex gap={3}  flexDir='column'>
                        {(isLoading||isFetching?<Spinner/>:'')}
                       {messages?.messages?.map((message)=>{
                        return (
                        <>
                        <Flex gap={4} key={message?.id}>
                        <Avatar bg='gray.500' icon={<AiOutlineUser fontSize='1.5rem' />} />
                        <Flex flexDir='column'>
                            <Heading
                             fontSize='12px'
                             letterSpacing='tight'
                             as='h4'

                             >{message?.user?.firstName}</Heading>
                        <Text fontSize='14px'>
                            {message?.message}
                        </Text>
                        </Flex>
                        </Flex>
                        
                        </>
                        
                        )
                       })}
                    </Flex>
                </Flex>
                <Flex  bottom='0' gap={2}  w='100%' alignItems='center'>
                    <Textarea onChange={(e)=>setMessage(e.target.value)} placeholder='Type here' />
                    <Button onClick={handleSubmit} size='md' colorScheme='blue' leftIcon={<AiOutlineSend/>}>Send</Button> 
                </Flex>
            </Flex>
            <Flex
            w='20%'
            h={550}
            pl={5}
            borderLeft='1px solid gray'
            
            py={5}
            flexDir='column'
            >
                <Heading pb='20px' fontSize='12px'>Group members</Heading>

                <Flex flexDir='column' gap={4} >
                    {messages?.messages?.map((message)=>{
                        return (
                            <>
                            <Flex gap={4} key={message?.user?.email}>
                            <Avatar bg='gray.500' icon={<AiOutlineUser fontSize='1.5rem' />} />
                            <Heading
                             fontSize='12px'
                             letterSpacing='tight'
                             as='h4'
                             pt={4}
                             
                             >{message?.user?.firstName} {" "} {message?.user?.lastName}</Heading>
                            </Flex>
                            <Divider/>
                            </>
                        )
                    })}
                        
                            
                </Flex>
                         
                        

            </Flex>
        </Flex>
    );
};

export default ChatGroup;