import axios from "axios";

export const postSubscription = async (email) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/subscriptions",
      email,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const validateEmail = async (email) => {
  try {
    const response = await axios.get("http://localhost:5000/subscriptions");
    const data = response.data;
    const emailExists = data.some((comment) => comment.email === email);
    return emailExists;
  } catch (error) {
    throw error;
  }
};
