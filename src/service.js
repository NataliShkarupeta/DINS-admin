import axios from "axios";

const URL = process.env.REACT_APP_URLBLOG;
const URLForPic = process.env.REACT_APP_URLPICTURE;

export const addPost = async (data) => {
  try {
    const response = await axios.post(URL, data);
    return response.data;
  } catch (e) {
    return e.message;
  }
};

export const addPicture = async (data) => {
  try {
    const response = await axios.post(URLForPic, data);
    return response.data;
  } catch (e) {
    return e.message;
  }
};
