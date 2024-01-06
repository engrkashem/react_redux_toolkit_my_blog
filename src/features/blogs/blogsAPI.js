import axios from "../../utils/axios";

const getBlogs=async(saved)=>{
    const queryStr=saved?"isSaved=true":""
    const response = await axios.get(`/blogs?${queryStr}`);

    return response.data;
};

export default getBlogs;