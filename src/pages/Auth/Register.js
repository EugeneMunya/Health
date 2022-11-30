import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, Spinner, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import Header from '../../components/Header/Header';
import { setUser } from '../../resources/features/AuthSlice';
import { useRegisterMutation } from '../../resources/MhealthApi';


const initialValues={
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    password:'',
    confirmPassword:'',
    occupation:'',
    linkedinlink:'',
    cvlink:''
   }
   const validationSchema = Yup.object({
    firstName:Yup.string().required('Required'),
    lastName:Yup.string().required('Required'),
    occupation:Yup.string().required('Required'),
    linkedinlink:Yup.string().required('Required'),
    cvlink:Yup.string().required('Required'),
    phone:Yup.string().length(10).required('Required').min(10),
    email:Yup.string().required('Email required').email('Not a proper email'),
    confirmPassword:Yup.string().oneOf([
        Yup.ref('password'),
        ''
    ],'Passwords must match').required('Required'),
    password:Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
 
  
   })

   

const Register = () => {

    const [register,{data,isSuccess,isLoading,isError,error}]=useRegisterMutation()
    const dispatch=useDispatch()
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
        register(values)
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
         pt={150}
         pb={20}
         mt={1}
         >
            
            <Flex bg="#fff"
             w="400px" 
             px={30}
             flexDir="column"
             alignItems="center"
             shadow="base"
             py={20}
             >
                {isLoading?<Spinner/>:''}
                
                <Heading pb={10}>Register</Heading>
                <VStack w="100%" 
                gap={3}
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
                <FormLabel>Phone Number(ex:07...)</FormLabel>
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
                <FormLabel>Password</FormLabel>
                <Input type='password'
                name='password'
                value={formik.values['password']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            {formik.touched['password']&& formik.errors['password']? <Box color='red.400'>{formik.errors['password']}</Box>:null}
                </FormControl>

                <FormControl borderColor="#5BFFB7">
                <FormLabel>Re-type Password</FormLabel>
                <Input type='password'
                name='confirmPassword'
                value={formik.values['confirmPassword']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            {formik.touched['confirmPassword']&& formik.errors['confirmPassword']? <Box color='red.400'>{formik.errors['confirmPassword']}</Box>:null}
                </FormControl>

                <FormControl borderColor="#5BFFB7">
                <Select placeholder='select your occupation'
                name='occupation'
                value={formik.values['occupation']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                <option value='publisher'>Publisher (books or videos)</option>
                <option value='client'>Psychiatrist</option>
                </Select>
            {formik.touched['occupation']&& formik.errors['occupation']? <Box color='red.400'>{formik.errors['occupation']}</Box>:null}
                </FormControl>

                <FormControl borderColor="#5BFFB7">
                <FormLabel>Google doc link for your CV</FormLabel>
                <Input type='text'
                name='cvlink'
                value={formik.values['cvlink']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            {formik.touched['cvlink']&& formik.errors['cvlink']? <Box color='red.400'>{formik.errors['cvlink']}</Box>:null}
                </FormControl>
                 <FormControl borderColor="#5BFFB7">
                <FormLabel>Your linkedIn profile link</FormLabel>
                <Input type='text'
                name='linkedinlink'
                value={formik.values['linkedinlink']}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            {formik.touched['linkedinlink']&& formik.errors['linkedinlink']? <Box color='red.400'>{formik.errors['linkedinlink']}</Box>:null}
                </FormControl>

                <Button 
                bg="#76B55B" 
                color="#fff" 
                size='md' 
                width="100%"
                type='submit'
                _hover={{textDecor:'none'}}
                >
                  Register
                </Button>
                </VStack>
            </Flex>
        </Flex>
        </>
    );
};

export default Register;