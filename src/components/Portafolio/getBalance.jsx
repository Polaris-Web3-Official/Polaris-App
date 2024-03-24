import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { infuraUrl } from '../../utils/Infura';
import formatStr from '../../utils/FormatStr';

const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

const Balance = ( walletAddress ) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      try {
        const balanceResult = await provider.getBalance(walletAddress);
        const formattedBalance = ethers.utils.formatEther(balanceResult);
        setBalance(formattedBalance);
      } catch (error) {
        console.error('Error al obtener el saldo:', error);
      }
    };

    getBalance();
  }, [walletAddress]);

  return formatStr(balance, 4) !== null ? balance : "0.00";
};

export default Balance;
