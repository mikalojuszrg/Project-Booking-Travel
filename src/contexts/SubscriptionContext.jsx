import { createContext, useState } from "react";

const SubscriptionContext = createContext();

const SubscriptionProvider = ({ children }) => {
  const [showSubscription, setShowSubscription] = useState(false);

  return (
    <SubscriptionContext.Provider
      value={{ showSubscription, setShowSubscription }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export { SubscriptionContext, SubscriptionProvider };
