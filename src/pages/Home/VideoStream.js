import { Flex, Heading,Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import {AiFillPlayCircle} from 'react-icons/ai'
const VideoItem = (props)=>{
    const {children,play,...rest}=props
    return <Flex 
    onClick={()=>play({name:"self Help video",url:"https://www.youtube.com/embed/QhBnZ6NPOY0"})}
     {...rest}
     gap={2}
     h="auto"
     alignItems="center"
     borderBottom="1px solid rgb(234, 220, 220)"
     cursor="pointer"
     >
        <AiFillPlayCircle color='#28a745' size={50}/>
        <Text
        letterSpacing="tight"
        fontSize={["12px","12px","15px"]}
        fontWeight="bold"
        color="#28a745"
        >{children}</Text>
    </Flex>
}
const VideoStream = () => {
    let [video,setVideo]=useState({name:'',url:''})
    const playVideo = (vdo)=>{
        setVideo({...vdo})
    }
    return (
        <Flex 
        flexDir="column"
        >
         <Heading
         textAlign="center"
         color="#28a745"
         pb={10}
         >Helpful videos</Heading>

         <Flex bg="#fff" 
         width="100%"
         px="10%"
         py={5}
         >
         <Flex gap={2}
         width="100%" 
          flexDir={['column','column','row']}
         >
            <Flex color="#fff" 
             w="40%"
             flexDir="column">
            <VideoItem play={playVideo}>Self help video</VideoItem>
            <VideoItem play={playVideo}>Self help video</VideoItem>
            <VideoItem play={playVideo}>Self help video</VideoItem>
            <VideoItem play={playVideo}>Self help video</VideoItem>
         </Flex>
         <Flex bg="black"
          h={300} 
         w="55%">
            {video.url}
         </Flex>
         </Flex>
         </Flex>
        </Flex>
    );
};

export default VideoStream;