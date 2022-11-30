const allMessages = ()=>'/messages'
const addMessage = (message)=>({
    url:`/addmessage/${message.userId}/${message.gId}`,
    method:'POST',
    body:message
})

export {
    allMessages,
    addMessage
}