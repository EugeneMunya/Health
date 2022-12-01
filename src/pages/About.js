import {Flex, Heading,Text } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Header/Nav';
import {TfiHandPointRight} from 'react-icons/tfi'

const About = () => {

    return ( 
        <>
        <Nav/>
        <Flex as="section" bg="#fff"
        gap={5} 
        width="100%"
         flexDir="column">

            <Flex
            bgColor='#33ae84'
            h={250}
            align='center'
            justify='center'
            color='#fff'
            fontSize='20px'
             pt='5%'
            >
             <Heading>ABOUT</Heading>
            </Flex>

           

            <Flex 
            px='10%'
            flexDir="column"
            gap={5}
            >
            <Flex align='center' justify='center' py={50}>
                <Heading>MOTTO: “Inquiring Minds Want to know !”</Heading>
            </Flex>
              <Flex flexDir='column'>
                <Text><b>Mental health journal Rwanda</b> Is an organization operating in Rwanda and beyond . Which is open platform for early career research, health education and mental awareness through article writing and research. Our vision is to promote Early Career research and writing, health education and mental health awareness in our community as milestone.</Text>
                </Flex>
                <Flex flexDir='column'>
                <Text>We believe that “no health without mental health” through our advocacy , we will assess and we provide sight to insensible mental health challenges in our community and workplaces. Further this will help us puzzle out and make awareness hence encouraging and engage youth in mental health and other health related research at early age. We aren’t expert but we pass judgment that  <b> “ubushake ni ubushobozi”</b> (willingness is ability).</Text>
                </Flex>

                <Flex flexDir='column'>
                    <Heading fontSize='25px' fontFamily='inherit'>Group capacity:</Heading>
                    <Text>Motivated and interested Students in research and writing with different occupations in mental health;</Text>
                    <Flex>
                        <TfiHandPointRight/>
                        <Text>Clinical Psychology students .</Text>
                    </Flex>
                    <Flex>
                        <TfiHandPointRight/>
                        <Text>Mental health Nurse.</Text>
                    </Flex>
                    <Flex>
                        <TfiHandPointRight/>
                        <Text>Occupation therapist.</Text>
                    </Flex>
                    <Flex>
                        <TfiHandPointRight/>
                        <Text>Social workers.</Text>
                    </Flex>
                    <Flex>
                        <TfiHandPointRight/>
                        <Text>Other health related field and supportive society.</Text>
                    </Flex>
                </Flex>

                <Flex flexDir='column'>
                <Heading fontSize='25px' fontFamily='inherit'>OUR MISSION</Heading>
                <Text>*It is our great mission and commission to practice mental health research, to train and mobilize youth in mental health research and health related fields with a goal of deeply making awareness of mental health challenges to our communities and developing proper and eternal solutions to them.And destigmatization of mental health.</Text>
                <Text>* Interns will achieve competence appropriate to their professional developmental level; In the area of Evidence-based practice in intervention and assessment in the area of research.</Text>
            </Flex>

            <Flex flexDir='column' gap={3}>
                <Heading fontSize='25px' fontFamily='inherit'>OBJECTIVES</Heading>
                <Text>Among others at our MHJRwanda the following are the objective to our mission.</Text>
                <Flex flexDir='column' gap={3}>
                    <Heading fontSize='15px' fontFamily='inherit'>* Capacity building & Research in Mental Health:</Heading>
                    <Text>We aspire to share research knowledge/skills and upgrading research skills through training, workshops, conferences and other available platforms.</Text>
                    <Text>It is a motivational and an opportunity which will help youth or students to pursue an in-depth original study about mental health and other health fields.</Text>
                    <Heading fontSize='15px' fontFamily='inherit'>*Article writing and Psycho-education of Mental Health to our community:</Heading>
                    <Text>We aspire community to aware mental health challenges say illness/disorders. This include indicating signs and Symptoms, providing preventive means and supportive cares hence encouraging report of strange challenge</Text>
                </Flex>
            </Flex>

            <Flex flexDir='column' mb={10}>
                <Heading fontSize='25px' fontFamily='inherit'>Vision</Heading>
                <Text>
                    We have eager and enthusiastic in promoting Early Career research and writing  in mental health and qualifying Rwanda, the leading country with most youth in mental health research industry across worldwide and other health related fields as milestones.
                </Text>
            </Flex>
                
            </Flex>

        </Flex>
        <Footer/>
        </>

    );
};

export default About;