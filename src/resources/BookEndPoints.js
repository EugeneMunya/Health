const createBook = (book)=>({
    url:'/newbook',
    method:'POST',
    body:book
})

const getAllBooks= ()=>'/books'

const updateBook = (book)=>({
    url:`/updatebook/${book.id}`,
    method:'POST',
    body:book

})

const deleteBook=(id)=>({
    url:`/deletebook/${id}`,
    method:'DELETE'
})

const approveBook = (id)=>`/approvebook/${id}`

export {
    createBook,
    updateBook,
    getAllBooks,
    deleteBook,
    approveBook
}


