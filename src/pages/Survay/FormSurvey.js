import {Flex
    } 
      from '@chakra-ui/react';

import Step from './Step';
import CommentForm from '../Survay/CommentForm'
import UserAnswers from './UserAnswers';
import UserForm from './UserForm';
import { createContext, useState } from 'react';
import Header from '../../components/Header/Header';

export const steps = createContext()

const FormSurvey = () => {

  const locl = localStorage.getItem('stp')
  const [step,setStep]=useState(parseInt(locl))
  const saveInLocal = (stp)=>{
    localStorage.setItem('stp',stp)
  }
  console.log(step)

    return (
      <>
      <Header/>
         <Flex 
        as="section"
         bg="#f5f5f5"
         flexDir="column"
         gap={20}
         pt={[300,300,100]}
         pb={20}
         alignItems="center"
         >
            <Flex
            as='section'
             gap={20}>
                <Step color={(isNaN(step)||step>=1)?'blue.500':'#91B572'}>1</Step>
                <Step color={(step===1||step>1)?'blue.500':'#91B572'}>2</Step>
                <Step color={(step===2)?'blue.500':'#91B572'}>3</Step>
            </Flex>
            <steps.Provider value={{step,setStep,saveInLocal}}>
             <UserForm/>
             <UserAnswers/>
            <CommentForm/>
            </steps.Provider>
            
        </Flex>
        </>
    );
};

export default FormSurvey;