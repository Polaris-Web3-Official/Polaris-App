import React from "react";
const FetchCoins =  React.lazy(()=> import("../../components/FetchData/FetchCoins"));

function FetchTokensBitcoin() {
  return (
    <FetchCoins
      calUrl={
        "https://polarisapp.tech/api/polaris/btc"
      }
      target={"los tokens existentes en la Blockchain de Bitcoin"}
    />
  );
}

export default React.memo(FetchTokensBitcoin)