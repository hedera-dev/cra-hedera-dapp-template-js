import { MetamaskContextProvider } from "../../contexts/MetamaskContext"
import { WalletConnectContextProvider } from "../../contexts/WalletConnectContext"
import { MetaMaskClient } from "./metamask/metamaskClient"
import { WalletConnectClient } from "./walletconnect/walletConnectClient"

export const AllWalletsProvider = (props) => {
  return (
      <MetamaskContextProvider>
        <WalletConnectContextProvider>
          <MetaMaskClient />
          <WalletConnectClient />
          {props.children}
        </WalletConnectContextProvider>
      </MetamaskContextProvider>
  )
}
