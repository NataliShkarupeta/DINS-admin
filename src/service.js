import axios from "axios";

const URL="http://localhost:3001/blog";
const URLForPic = "http://localhost:3001/pictures";


export const addPost = async (data) => {
  try {
    const response = await axios.post(URL, data);
    return response.data;
  } catch (e) {
    return (e.message);
  }
};

export const addPicture = async(data)=>{
    try {
      const response = await axios.post(URLForPic, data);
      return response.data;
    } catch (e) {
      return e.message;
    }
}
