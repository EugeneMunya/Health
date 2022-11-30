const getAllVideos = ()=>'/videos'
const createVideo = (video)=>({
    url:'/addvideo',
    method:'POST',
    body:video
})

const updateVideo = (video)=>({
    url:`/updatevideo/${video.id}`,
    method:'PUT',
    body:video
})

const deleteVideo =(id)=>({
    url:`/deletevideo/${id}`,
    method:'DELETE'
})


const approveVideo = (id)=>`/approvevideo/${id}`

export {
    approveVideo,
    createVideo,
    updateVideo,
    getAllVideos,
    deleteVideo,
}