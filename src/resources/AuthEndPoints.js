const register=(user)=>({
    url:'/register',
    method:'POST',
    body:user
})

const login = (crendentials)=>({
    url:'/login',
    method:'POST',
    body:crendentials
})

const forgotPassword = (email)=>({
    url:'/forgot',
    method:'POST',
    body:email
})

const resetPassword =(newPassword)=>({
    url:'/reset',
    method:'POST',
    body:newPassword
})


export {
    register,
    login,
    forgotPassword,
    resetPassword
}