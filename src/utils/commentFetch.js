import axios from "axios";

export const postComment = async (commentInfo) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/comments",
      commentInfo,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const validateEmail = async (email) => {
  try {
    const response = await axios.get("http://localhost:5000/comments");
    const data = response.data;
    const emailExists = data.some((comment) => comment.email === email);
    return emailExists;
  } catch (error) {
    throw error;
  }
};
