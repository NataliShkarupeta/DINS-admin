import axios from "axios";

const URL="http://localhost:3001/blog";

export const addPost = async (data) => {
  try {
    const response = await axios.post(URL, data);
    return response.data;
  } catch (e) {
    return (e.message);
  }
};

