import { Button, Flex, FormControl, 
    FormLabel, Input,
     Select,
       VStack,Box, Spinner 
    } 
      from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useNewSurveyMutation } from '../../resources/MhealthApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../resources/features/AuthSlice';
import { steps } from './FormSurvey';

const initialValues={
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    city:'',
    province:'',
    gender:'',
    age:'',
    bod:'',

   }

 const validationSchema = Yup.object({
    firstName:Yup.string().required('Required'),
    lastName:Yup.string().required('Required'),
     phone:Yup.string().length(10).required('Required').min(10),
    email:Yup.string().required('Email required').email('Not a proper email'),
    city:Yup.string().required('Required'),
    province:Yup.string().required('Required'),
    gender:Yup.string().required('Required'),
    age:Yup.number().required('Required'),
    bod:Yup.date().required('Required'),
   })



const UserForm = () => {

     const [newSurvey,{data:dataForm,isLoading:isLoadingForm,isSuccess:isSuccessForm}]=useNewSurveyMutation()
   const dispatch = useDispatch()
   const stepCtxt = useContext(steps)
   const {step,setStep,saveInLocal}=stepCtxt
  const locl=localStorage.getItem('stp')

   const onSubmit = values =>{
    newSurvey(values)
   }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })


    useEffect(()=>{

        if(isSuccessForm){
            dispatch(setUser({user:dataForm?.user,access_token:null}))
            setStep(1)
            saveInLocal(1)
        }
    },[isSuccessForm,dataForm,dispatch])


    
    return (
        (step==null||locl==null)? <Flex 
            as='section'
            bg="#fff"
             w="400px" 
             px={30}
             flexDir="column"
             alignItems="center"
             shadow="base"
             py={20}
             >
               {isLoadingForm?<Spinner size='md' />:null}
                <VStack w="100%" 
                gap={2}
                as='form'
                onSubmit={formik.handleSubmit}
                >
                
                <FormControl borderColor="#5BFFB7">
                <FormLabel>First Name</FormLabel>
                <Input type='text'
                name='firstName'
                value={formik.values['firstName']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched['firstName']&& formik.errors['firstName']? <Box color='red.400'>{formik.errors['firstName']}</Box>:null}
                </FormControl>
                <FormControl borderColor="#5BFFB7">
                <FormLabel>Last Name</FormLabel>
                <Input type='text'
                 name='lastName'
                value={formik.values['lastName']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
               {formik.touched['lastName']&& formik.errors['lastName']? <Box color='red.400'>{formik.errors['lastName']}</Box>:null}
                </FormControl>

                <FormControl borderColor="#5BFFB7">
                <FormLabel>Phone Number</FormLabel>
                <Input type='text'
                placeholder='00 00 00 00 00'
                name='phone'
                value={formik.values['phone']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched['phone']&& formik.errors['phone']? <Box color='red.400'>{formik.errors['phone']}</Box>:null}
                </FormControl>

                <FormControl borderColor="#5BFFB7">
                <FormLabel>Email address</FormLabel>
                <Input type='email'
                name='email'
                value={formik.values['email']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched['email']&& formik.errors['email']? <Box color='red.400'>{formik.errors['email']}</Box>:null}
                </FormControl>
                
    
                <FormControl borderColor="#5BFFB7">
                <FormLabel>City</FormLabel>
                <Input type='text'
                name='city'
                value={formik.values['city']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            {formik.touched['city']&& formik.errors['city']? <Box color='red.400'>{formik.errors['city']}</Box>:null}
                </FormControl>

                <FormControl>
                <Select placeholder='Select province' borderColor="#5BFFB7"
                name='province'
                value={formik.values['province']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                <option value='kigali'>Kigali</option>
                <option value='south'>Southern</option>
                <option value='east'>Easter</option>
                <option value='west'>Western</option>
                <option value='north'>Northern</option>
                </Select>
                {formik.touched['province']&& formik.errors['province']? <Box color='red.400'>{formik.errors['province']}</Box>:null}
                </FormControl>

                <FormControl>
                <Select placeholder='Select gender' borderColor="#5BFFB7"
                 name='gender'
                value={formik.values['gender']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                </Select>
                 {formik.touched['gender']&& formik.errors['gender']? <Box color='red.400'>{formik.errors['gender']}</Box>:null}
                </FormControl>
                
                

                <FormControl borderColor="#5BFFB7">
                <FormLabel>Age</FormLabel>
                <Input type='number'
                name='age'
                value={formik.values['age']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched['age']&& formik.errors['age']? <Box color='red.400'>{formik.errors['age']}</Box>:null}
                </FormControl>
                <FormControl borderColor="#5BFFB7">

                <FormLabel>Date of birth</FormLabel>
                <Input type='date'
                 name='bod'
                value={formik.values['bod']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            {formik.touched['bod']&& formik.errors['bod']? <Box color='red.400'>{formik.errors['bod']}</Box>:null}

                </FormControl>

                <Button 
                bg="#76B55B" 
                color="#fff" 
                size='md' 
                width="100%"
                _hover={{bg:"#76B55B",color:"#fff"}}
                type='submit'
                isLoading={isLoadingForm}
                >
                    Next
                    </Button>
                </VStack>
            </Flex>:null
            
    );
};

export default UserForm;