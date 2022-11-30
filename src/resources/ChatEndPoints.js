const allGroups = ()=>'/groups'
const createGroup = (group)=>({
    url:'/newgroup',
    method:'POST',
    body:group
})

const updateGroup=(group)=>({
    url:`/updategroup/${group.id}`,
    method:'PUT',
    body:group
})

const deleteGroup=(id)=>({
    url:`/deletegroup/${id}`,
    method:'DELETE',
})

const addUserInGroup = (user)=>({
    url:`/adduser/${user.id}/${user.gid}`,
    method:'POST',
})

const removeUserInGroup=(user)=>({
    url:`/removeuser/${user.id}/${user.gid}`,
    method:'POST'
})

const postMessageInGroup=(message)=>({
    url:`/addmessage/${message.userId}/${message.gid}`,
    method:'POST',
    body:{message}
})


export {
    allGroups,
    addUserInGroup,
    createGroup,
    updateGroup,
    deleteGroup,
    removeUserInGroup,
    postMessageInGroup
}