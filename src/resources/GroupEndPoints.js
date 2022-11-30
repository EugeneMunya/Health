const allGroups = ()=>'/groups'
const createGroup = (group)=>({
    url:'/newgroup',
    method:'POST',
    body:group
})
const updateGroup = (group)=>({
    url:`/updategroup/${group.id}`,
    method:'PUT',
    body:group
})

const deletGroup=(id)=>({
    url:`/deletegroup/${id}`,
    method:'DELETE',
})

const addUserInGroup = (user)=>({
    url:`/adduser/${user.userId}/${user?.gid}`,
    method:'POST'
})

const removeUserInGroup = (user)=>({
    url:`/removeuser/${user.userId}/${user.gid}`,
    method:'POST'
})

export {
    allGroups,
    createGroup,
    updateGroup,
    deletGroup,
    addUserInGroup,
    removeUserInGroup,
}