import axios from "../../utils/axios";

const getRelatedBlogs=async(tags=[], id)=>{
    const limit=5;

    const queryString=tags.length? tags.map(tag=>`tags_like=${tag}`).join("&")+`&id_ne=${id}&_limit=${limit}`:`id_ne=${id}&_limit=${limit}`;


    const response = await axios.get(`/blogs?${queryString}`);

    return response.data;
};

export default getRelatedBlogs;