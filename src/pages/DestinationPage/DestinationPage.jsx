import { useParams } from "react-router-dom";

const DestinationPage = () => {
  const { destination } = useParams();

  return <div>{destination}</div>;
};

export default DestinationPage;
