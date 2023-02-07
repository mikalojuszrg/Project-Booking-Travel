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
