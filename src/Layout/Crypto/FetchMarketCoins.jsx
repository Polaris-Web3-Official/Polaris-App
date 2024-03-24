import React from "react";
import FetchCoins from "../../components/FetchData/FetchCoins";

function FetchMarketCoins() {
  return (
      <FetchCoins
        calUrl={
          "https://polarisapp.tech/api/polaris/top"
        }
         
        target={"las criptomonedas populares"}
      />
  );
}

export default React.memo(FetchMarketCoins)
