import { Divider, Flex, Heading, Icon } from '@chakra-ui/react';
import React from 'react';

import { useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashNav from './DashNav';

import {AiOutlineDashboard,AiFillWechat,AiTwotoneVideoCamera} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {FaBookReader,FaQuoteLeft} from 'react-icons/fa'
import {FcSurvey} from 'react-icons/fc'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'


const Dashboard = () => {

    const loggedInUser = useSelector((state)=>state.auth)
    const {occupation,isAdmin,isUser,isApproved} =loggedInUser?.user
    console.log(occupation,isAdmin,isUser)

    return (
        <Flex
        h='100vh'
        maxW='2000px'
        flexDir={['column','column','row']}
        overflow='auto'
        >
            <Flex
            w={['100%','100%','15%']}
            bgColor='#28a745'
            color='#fff'
            flexDir='column'
            alignItems='center'
            justify={['center','center','flex-start']}
            py={5}
            h='100vh'
            >
            <Link to='/'><Heading fontSize={20} py={2}>Baho Dashboard</Heading></Link>    

                <Divider/>
                <Flex as='section' flexDir='column' gap={5} py={5}>
                    {(isAdmin)?
                    <Flex gap={2}>
                        <NavLink to='/dashboard'>
                        <Icon as={AiOutlineDashboard} color="#fff"/>
                    </NavLink>
                    <NavLink to='/dashboard'>
                        Dashboard
                        </NavLink>
                    </Flex>:null}
                    {isAdmin?
                     <Flex gap={2}>
                        <NavLink to='users'>
                        <Icon as={FiUsers}/>
                    </NavLink>
                    <NavLink to='users'>
                        Users
                        </NavLink>
                    </Flex>:null}
                    {(isAdmin||isApproved)?
                     <Flex gap={2}>
                        <NavLink to='surveys'>
                        <Icon as={FcSurvey}/>
                    </NavLink>
                    <NavLink to='surveys'>
                        Surveys
                        </NavLink>
                    </Flex>:null}

                    {isAdmin?
                     <Flex gap={2}>
                        <NavLink to='groups'>
                        <Icon as={HiOutlineUserGroup}/>
                    </NavLink>
                    <NavLink to='groups'>
                        Groups
                        </NavLink>
                    </Flex>:null}

                     {isApproved?<Flex gap={2}>
                        <NavLink to='chat'>
                        <Icon as={AiFillWechat}/>
                    </NavLink>
                    <NavLink to='chat'>
                        Chat group
                        </NavLink>
                    </Flex>:''}

                    {!isAdmin||!isApproved?<Flex gap={2}>
                        <NavLink to='chat'>
                        <Icon as={CgProfile}/>
                    </NavLink>
                    <NavLink to='chat'>
                        Profile
                        </NavLink>
                    </Flex>:''}

                    {(occupation==='publisher'||isAdmin)?
                     <Flex gap={2}>
                        <NavLink to='books'>
                        <Icon as={FaBookReader}/>
                    </NavLink>

                    <NavLink to='books'>
                        Books
                        </NavLink>
                    </Flex>:null}

                    {(occupation==='publisher'||isAdmin)?
                     <Flex gap={2}>
                        <NavLink to='videos'>
                        <Icon as={AiTwotoneVideoCamera}/>
                    </NavLink>
                    <NavLink to='videos'>
                        Videos
                        </NavLink>
                    </Flex>:null}

                    {(isAdmin||occupation==='publisher')?
                     <Flex gap={2}>
                        <NavLink to='quotes'>
                        <Icon as={FaQuoteLeft}/>
                    </NavLink>
                    <NavLink to='quotes'>
                        Quotes
                        </NavLink>
                    </Flex>:null}
                </Flex>
            </Flex>

            <Flex flexDir='column' 
            gap={10} w='100%' >
                <DashNav/>
                <Flex flexDir='column'
                px={10}
                overflow='auto'
                >
                
                <Outlet/>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Dashboard;