import Web3 from "web3"

export const getProvider = async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    try {
      // Request account access if needed
      window.ethereum.enable()
      return window.web3
    } catch (error) {
      // User denied account access...
      console.error("user denied access")
      return null
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
    return window.web3
  }
  console.log(
    "Non-Ethereum browser detected. You should consider trying MetaMask!"
  )
  return null
}
