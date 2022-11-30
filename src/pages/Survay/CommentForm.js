import { Box, Button, Flex, FormControl, FormLabel, Input, Spinner, Textarea, VStack } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useAddCommentMutation } from '../../resources/MhealthApi';
import { useNavigate } from 'react-router-dom';
import { steps } from './FormSurvey';
import { useSelector } from 'react-redux';

const initialValues={
    weight:'',
    height:'',
    comment:''
   }

 const validationSchema = Yup.object({
    weight:Yup.string().required('Required'),
    height:Yup.string().required('Required'),
    comment:Yup.string().required('Required'),
   })


const CommentForm = () => {

 const [addComment,{isLoading:isLoadingCom,isSuccess:isSuccessCom,}]=useAddCommentMutation()
 const navigate = useNavigate()
 
const user = useSelector((state)=>state.auth.user)
const userId=user?.id

 const stpContxt = useContext(steps)
 const locl=localStorage.getItem('stp')
 const {step}=stpContxt

 useEffect(()=>{
    if(isSuccessCom){
        localStorage.removeItem('stp')
        sessionStorage.removeItem('user')
        navigate('/')
    }
 },[isSuccessCom,navigate])


const onSubmit = values =>{
    addComment({values,userId})
}
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    
    return (
       (step===2&&parseInt(locl)===2)?<Flex>
             <Flex 
            as='section'
            bg="#fff"
             w="400px" 
             px={30}
             flexDir="column"
             alignItems="center"
             shadow="base"
             py={10}
             >
                {isLoadingCom? <Spinner size='md' />:null}
                <VStack w="100%" 
                gap={2}
                as='form'
                onSubmit={formik.handleSubmit}
                >
                
                <FormControl borderColor="#5BFFB7">
                <FormLabel>Weight</FormLabel>
                <Input type='text'
                name='weight'
                value={formik.values['weight']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched['weight']&& formik.errors['weight']? <Box color='red.400'>{formik.errors['weight']}</Box>:null}
                </FormControl>


                <FormControl borderColor="#5BFFB7">
                <FormLabel>Height</FormLabel>
                <Input type='text'
                name='height'
                value={formik.values['height']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched['height']&& formik.errors['height']? <Box color='red.400'>{formik.errors['height']}</Box>:null}
                </FormControl>

                <FormControl borderColor="#5BFFB7">
                <FormLabel>Do you want to share any other information?</FormLabel>
                <Textarea placeholder='Say something...'
                 name='comment'
                value={formik.values['comment']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched['comment']&& formik.errors['comment']? <Box color='red.400'>{formik.errors['comment']}</Box>:null}
                </FormControl>
                <Button 
                bg="#76B55B" 
                color="#fff" 
                size='md' 
                width="100%"
                _hover={{textDecor:'none'}}
                type='submit'
                isLoading={isLoadingCom}
                >
                    Submit
                    </Button>
                </VStack>
            </Flex>
            </Flex>:null
    );
};

export default CommentForm;