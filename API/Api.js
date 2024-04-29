export const getSingleBlog = async(blogId)=>{
    const response = await fetch(`/api/blog/getsingleblog/${blogId}`,{ method: "GET" })
    const data = await response.json();
    return data;
}