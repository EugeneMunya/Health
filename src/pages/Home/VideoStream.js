import { Flex, Heading,Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import {MdVideoLibrary} from 'react-icons/md'

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
        <MdVideoLibrary color='#33ae84' size={30}/>
        <Text
        letterSpacing="tight"
        fontSize={["12px","12px","15px"]}
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
        px='10%'
        py={50}
        >
         <Flex 
         py={5}
         >

         <Flex gap={[10,10,20]}
         width="100%" 
          flexDir={['column','column','row']}
         >
            <Flex
             gap={5}
             flexDir="column">
            <Flex flexDir='column' gap={5}>
            <Text color="#33ae84">-HOW TOs</Text>
            <Heading fontSize='30px' fontFamily='inherit'>Helpful videos</Heading>
            </Flex>
            <Flex flexDir='column'>
            <VideoItem play={playVideo}>Self help video</VideoItem>
            <VideoItem play={playVideo}>Self help video</VideoItem>
            <VideoItem play={playVideo}>Self help video</VideoItem>
            <VideoItem play={playVideo}>Self help video</VideoItem>
            </Flex>
         </Flex>
         <Flex bg="black"
          h={300} 
         w={['100%','100%','50%']}>
            {video.url}
         </Flex>
         </Flex>
         </Flex>
        </Flex>
    );
};

export default VideoStream;