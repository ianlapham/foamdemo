
import Web3 from "web3";
import DCA from '../ethConstants/contract'

export const getProvider = async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      window.ethereum.enable();
      return window.web3;
    } catch (error) {
      // User denied account access...
      console.error("user denied access");
      return null;
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    return window.web3;
  }
  console.log(
    "Non-Ethereum browser detected. You should consider trying MetaMask!"
  );
  return null;
};

export const getDCA = async (web3) => {
  try {
    let contract = await new web3.eth.Contract(DCA.Rinkeby.abi, DCA.Rinkeby.address);
    return contract
  } catch (err) {
    console.log(err);
  }
}

export const setupDCA = async(dca, account) => {
  try {
    await dca.methods.setup('0x26C226EBb6104676E593F8A070aD6f25cDa60F8D').send({from : account})
  } catch(e){
    console.log(e)
    console.log('error setting up dca contract')
  }
}

export const addFunds = async(dca, web3, account, amount, gotData) => {
  await dca.methods.addFunds(account).send({from : account, value : web3.utils.toWei(amount, "ether")}).on('confirmation', gotData)
}

export const executeInvestment = async(dca, address, account) => {
  await dca.methods.executeInvestment(address).send({from : account})
}

export const setupUser = async (
    web3, 
    dca, 
    account, 
    numOfInvestments, 
    amountPerInvestment, 
    bounty, 
    days,
    gotData
  ) =>  {
  const amountPaid = (parseFloat(amountPerInvestment) + parseFloat(bounty)).toString()
  const timeDelta =  (days *  86400).toString()
  await dca.methods.setupUser(numOfInvestments, web3.utils.toWei(amountPerInvestment, "ether"), web3.utils.toWei(bounty, "ether"), timeDelta).send({from : account, value : web3.utils.toWei(amountPaid, "ether")}).on('confirmation', gotData)
}

export const updateSettings = async (
  web3, 
  dca, 
  account, 
  numOfInvestments, 
  amountPerInvestment, 
  bounty, 
  days,
  gotData
) =>  {
  const timeDelta = (days*86400).toString()
  await dca.methods.updateSettings(
    numOfInvestments, 
    web3.utils.toWei(amountPerInvestment, "ether"), 
    web3.utils.toWei(bounty, "ether"), 
    timeDelta).send({from : account}).on('confirmation', gotData)
}

export const getData = async (dca, web3, account) => {
  console.log('Getting Ethereum data')
  let data = await dca.methods.getData(account).call({from : account})
  let res = {
    active : data[0],
    funds : web3.utils.fromWei(data[1]['_hex']),
    numOfInvestments : parseInt(data[2]['_hex']),
    amountPerInvestment : web3.utils.fromWei(data[3]['_hex']),
    bounty : web3.utils.fromWei(data[4]['_hex']),
    timeDelta : parseInt(data[5]['_hex']),
    lastInvestment : parseInt(data[6]['_hex']),
    totalInvestmentsMade : parseInt(data[7]['_hex']),
    totalEthInvested : web3.utils.fromWei(data[8]['_hex']),
  }
  return res;
}
