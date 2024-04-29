import { createContext, useState } from "react";

const defaultValue = {
  accountId: '',
  setAccountId: (newValue) => { },
  isConnected: false,
  setIsConnected: (newValue) => { },
}

export const WalletConnectContext = createContext(defaultValue);

export const WalletConnectContextProvider = (props) => {
  const [accountId, setAccountId] = useState(defaultValue.accountId);
  const [isConnected, setIsConnected] = useState(defaultValue.isConnected);

  return (
    <WalletConnectContext.Provider
      value={{
        accountId,
        setAccountId,
        isConnected,
        setIsConnected
      }}
    >
      {props.children}
    </WalletConnectContext.Provider>
  )
}
