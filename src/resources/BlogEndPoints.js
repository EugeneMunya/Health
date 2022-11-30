const createBlog = (blog)=>({
    url:'/newblog',
    method:'POST',
    body:blog
})

const getAllBlogPost = ()=>'/blogs'

const updateBlog = (blog)=>({
    url:`/updateblog/${blog.id}`,
    method:'POST',
    body:blog

})

const deleteBlog=(id)=>({
    url:`/deleteblog/${id}`,
    method:'DELETE'
})

export {
    createBlog,
    getAllBlogPost,
    updateBlog,
    deleteBlog
}
