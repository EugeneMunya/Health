import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home'

import FormSurvey from '../pages/Survay/FormSurvey';
import Dashboard from '../components/Dashboard/Dashboard';
import Users from '../components/Dashboard/Users';
import Surveys from '../components/Dashboard/Surveys';
import Groups from '../components/Dashboard/Groups';
import ChatGroup from '../components/Dashboard/ChatGroup';
import Books from '../components/Dashboard/Books';
import Videos from '../components/Dashboard/Video';
import Quotes from '../components/Dashboard/Quotes';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ResetPassword from '../pages/Auth/ResetPassword';
import { ProtectRoutes } from '../components/ProtectRoutes/ProtectRoutes';
import DashHome from '../components/Dashboard/DashHome';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const Routers = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login'  element={<Login/>}/>
            <Route path='/register'  element={<Register/>}/>
            <Route path='/survey'  element={<FormSurvey/>}/>
            <Route path='/register'  element={<Register/>}/>
            <Route path='/forgot' element={<ForgotPassword/>}/>
            <Route path='/reset' element={<ResetPassword/>}/>
            
            {/* dashboard */}
            <Route element={<ProtectRoutes/>}>
             <Route path='/dashboard'  element={<Dashboard/>}>
                <Route index element={<DashHome/>}/>
                <Route path='users' element={<Users/>}/>
                <Route path='surveys' element={<Surveys/>}/>
                <Route path='groups' element={<Groups/>}/>
                <Route path='chat' element={<ChatGroup/>}/>
                <Route path='books' element={<Books/>}/>
                <Route path='videos' element={<Videos/>}/>
                <Route path='quotes' element={<Quotes/>}/>
             </Route>
             </Route>
        </Routes>
    );
};

export default Routers;