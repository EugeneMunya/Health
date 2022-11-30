const surveyForm = (user)=>({
    url:'/surveyform',
    method:'POST',
    body:user
})

const userResponse = (answers)=>({
    url:`/survey/${answers.userId}`,
    method:'POST',
    body:{answers:answers.answers}
})

const userComment = (comment)=>({
    url:`/comment/${comment.userId}`,
    method:'POST',
    body:comment
})

const allQuestions = ()=>'/questions'

export {surveyForm,userResponse,userComment,allQuestions}