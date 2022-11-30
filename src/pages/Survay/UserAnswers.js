import { Button, Flex, Heading, Radio, RadioGroup, Spinner, Stack } from '@chakra-ui/react';
import React, { Fragment, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSurveyQuestionQuery, useUserAnswerMutation } from '../../resources/MhealthApi';
import { steps } from './FormSurvey';

const UserAnswers = () => {
    const [userAnswer,{data:dataAnswer,isLoading:isLoadingAnswer,isSuccess:isSuccessAnswer}]=useUserAnswerMutation()
    const {data:dataQst,isLoading:isLoadingQst}=useSurveyQuestionQuery()

   const user = useSelector((state)=>state.auth.user)
   console.log(user)
   const userId=user?.id
   const stepCtxt = useContext(steps)
   const {step,setStep,saveInLocal}=stepCtxt
   const locl = localStorage.getItem('stp')
   

   const answers = []
   useEffect(()=>{
    if(isSuccessAnswer){
        setStep(2)
        saveInLocal(2)
    }
   },[isSuccessAnswer,dataAnswer])


   const handleChange = (vlue)=>{
    if(answers.indexOf(parseInt(vlue))===-1){
        answers.push(parseInt(vlue))
    }
   }

   const handleSubmit=(e)=>{
    e.preventDefault()
    userAnswer({answers:answers,userId:userId})

   }

   
    return (
          
         (step===1&&parseInt(locl)===1)? <Flex 
            bg="#fff"
             w="70%"
             maxW="100%" 
             px={30}
             flexDir="column"
             alignItems="center"
             shadow="base"
             py={5}
             justifyContent='space-between'
             as='form'
            onSubmit={handleSubmit}
            >
                <Flex flexDir='column'
                gap={10}
                >
                    
                   {dataQst?.questions?.map((question)=>{
                        return (
                    <Fragment key={question?.id}>
                        <Heading as='h4' h='100%' fontSize='20px'>
                            {question?.name}
                    </Heading>
                    <Flex as='section' 
                    flexDir='column'
                    alignItems='flex-start'
                    >
                    
                   <RadioGroup onChange={(e)=>handleChange(e)}>
                    <Stack>
                        {question?.answers?.map((answer)=>{
                            return (
                                <Fragment key={answer?.name+answer?.id}>
                                    <Radio value={`${answer?.id}`}>{answer?.name}</Radio>
                                </Fragment>
                            )
                        })}
                        
                       {isLoadingQst?<Spinner size='md' />:''}
                    </Stack>
                    </RadioGroup>
                    </Flex>
                    </Fragment> 
                        )
                    })}

                    
                    
                    
                </Flex>
                <Flex pt={10}>
                    <Button size='md' 
                     _hover={{textDecor:'none'}} 
                     bg="#76B55B" 
                     type='submit'
                     isLoading={isLoadingAnswer}
                     color="#fff">Next</Button>
                </Flex>
         
            </Flex>:null
    );
};

export default UserAnswers;