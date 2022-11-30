import { Button, Flex, FormControl, FormLabel, Heading, Input, VStack,Text, Box, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import {useFormik } from 'formik';
import * as Yup from 'yup'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../resources/MhealthApi';
import { setUser } from '../../resources/features/AuthSlice';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';

 const initialValues={
    email:'',
    password:''
   }
   const validationSchema = Yup.object({
    email:Yup.string().required('email required').email('Not a proper email'),
    password:Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
   })


const Login = () => {

    const [login,{data,isLoading,isSuccess,isError,error}]=useLoginMutation()
    const dispatch =useDispatch()
    const location = useLocation()
    const redirec = location.state?.path|| '/dashboard'
    const navigate = useNavigate()

    useEffect(()=>{
        if(data!==undefined){
       dispatch(setUser({user:data?.user,access_token:data?.access_token}))
       navigate(redirec,{replace:true})
        } 
    },[isSuccess,data,dispatch,navigate,redirec])

const onSubmit = values =>{
    login(values)  
}
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })



    return (
        <>
        <Header/>
        <Flex 
        as="section"
         bg="#f5f5f5"
         justifyContent="center"
         h="100vh"
         alignItems="center"
         mt={10}
         >
            
            
            <Flex bg="#fff"
             w="400px" 
             py={10}
             px={30}
             flexDir="column"
             alignItems="center"
             shadow="base"
             justifyContent="center"

             >

                {isLoading?<Spinner/>:''}
                
                <Heading pb={10}>Login</Heading>
                <VStack w="100%" gap={5}
                  as='form'
                  onSubmit={formik.handleSubmit}
                 >
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
                <FormLabel>Password</FormLabel>
                <Input type='password'
                name='password'
                value={formik.values['password']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched['password']&& formik.errors['password']? <Box color='red.400'>{formik.errors['password']}</Box>:null}

                </FormControl>
                <Link to='/forgot'>
                <Text color='purple'>Forgot password</Text>
                </Link>
                <Button 
                bg="#76B55B" 
                color="#fff" 
                size='md' 
                width="100%"
                _hover={{textDecor:'none'}}
                type='submit'
                >
                    Login
                    </Button>
                     <Link to='/register'><Text color='purple'>Don't have account? Singup now</Text></Link>
                </VStack>
            </Flex>
        </Flex>
        </>
    );
};

export default Login;