export const postSubscription = (email) => {
  if (typeof email !== "object") {
    return Promise.reject(new Error("Wrong value"));
  }

  return fetch("http://localhost:5000/subscriptions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};
