import { createContext, useState } from "react";

const SubscriptionContext = createContext();

const SubscriptionProvider = ({ children }) => {
  const [showSubscription, setShowSubscription] = useState(false);

  const toggleSubscription = () => {
    setShowSubscription((prevValue) => !prevValue);
  };

  console.log(showSubscription);

  return (
    <SubscriptionContext.Provider
      value={{ showSubscription, toggleSubscription }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export { SubscriptionContext, SubscriptionProvider };
