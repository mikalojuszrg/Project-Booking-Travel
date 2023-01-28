import { useEffect, useState } from "react";

const App = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.users);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);

  return (
    <div>
      {/* {backendData.map((user) => (
        <p>{user}</p>
      ))} */}
      asdasdasd
    </div>
  );
};

export default App;
