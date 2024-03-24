import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider as PaperProvider } from "react-native-paper";
import { WalletConnectModal } from "@walletconnect/modal-react-native";
import { projectId } from "./src/utils/Infura";
import { providerMetadata } from "./src/utils/Infura";
import { View } from "react-native";
import GlobalStyle from "./src/style/Global";

const style = GlobalStyle();

function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1, backgroundColor: style.mainBackgroundColor }}>
        <AppNavigator />
      </View>

      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
        themeMode="dark"
      />
    </PaperProvider>
  );
}

export default App;
