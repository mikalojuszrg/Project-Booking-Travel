export const postSubscription = (email) => {
  fetch(`http://localhost:5000/subscriptions`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_email: email,
    }),
  }).then((response) => {
    if (response.ok) {
      console.log(response.json());
    }
  });
};
