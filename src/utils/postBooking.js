import axios from "axios";

export const postBooking = async (bookingInfo) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/bookings",
      bookingInfo,
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
