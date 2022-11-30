import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import {Box, Flex, HStack} from '@chakra-ui/react'
import {FaBrain } from 'react-icons/fa'
const Nav = () => {

    const nav_links=[
        {
            id:1,
            path:'/',
            name:'Home'
        },
        {
            id:2,
            path:'/about',
            name:'About'
        },
        {
            id:3,
            path:'/services',
            name:'Services'
        }
        ,
        {
            id:5,
            path:'/contact',
            name:'Contact'
        }
    ];

    return (
        <Box  
        as='nav' 
        bg="#fff" 
        color='#28a745'
        px="10%"
        >
            <Flex 
            flexDirection={['column','column','row']} 
            justifyContent="space-between" 
            alignItems="center"
             h="100%"
             pt={4}
             pb="12px"
             
             >

               <Box 
               display={['none','none','block']}
                maxW={["50px","50px","80px"]} 
                className="logo"
                >
                <FaBrain size="30px"/>
                </Box> 
               
             <HStack 
             flexDirection={['column','column','row']} 
             className='nav_menu'  alignItems='center' 
             spacing='24px'
             justifyContent="flex-start"
              >
                {
                    nav_links.map((menu)=>{
                        return  <NavLink to={menu.path} key={menu.id}>{menu.name}</NavLink>
                    })
                }
            </HStack>
            <Flex 
            className='auth_nav'h="100%" 
            gap={['0','0','8px']} 
            flexDirection={['column','column','row']} 
            alignItems="center"
            >
               <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>SignUp</NavLink>
            </Flex>
            </Flex>
        </Box>
    );
};

export default Nav;