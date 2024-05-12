import React from "react";
const FetchCoins =  React.lazy(()=> import("../../components/FetchData/FetchCoins"));

function FetchTokensEthereum() {
  return (
    <FetchCoins
      calUrl={
        "https://polarisapp.tech/api/polaris/eth"
      }
      target={"los tokens existentes en la Blockchain de Ethereum"}
    />
  );
}

export default React.memo(FetchTokensEthereum)