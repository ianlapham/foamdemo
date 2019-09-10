const DCA  = {
  'Main': {
  
  },
  'Rinkeby': {
    'address': '0xdf0bb3b3e625a0ed6cac1600a3385883936aa229',
    'abi': [{"name": "NewUser", "inputs": [{"type": "address", "name": "_user", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "InvestmentMade", "inputs": [{"type": "address", "name": "_user", "indexed": true}], "anonymous": false, "type": "event"}, {"name": "setup", "outputs": [], "inputs": [{"type": "address", "name": "_exchangeAddress"}], "constant": false, "payable": false, "type": "function", "gas": 35625}, {"name": "getExchange", "outputs": [{"type": "address", "name": "out"}], "inputs": [], "constant": true, "payable": false, "type": "function", "gas": 513}, {"constant": false, "payable": true, "type": "fallback"}, {"name": "executeInvestment", "outputs": [], "inputs": [{"type": "address", "name": "_userAddress"}], "constant": false, "payable": false, "type": "function", "gas": 281899}, {"name": "setupUser", "outputs": [], "inputs": [{"type": "uint256", "name": "_numOfInvestments"}, {"type": "uint256", "name": "_amtPerInvestment", "unit": "wei"}, {"type": "uint256", "name": "_bounty", "unit": "wei"}, {"type": "uint256", "name": "_timeDelta", "unit": "sec"}], "constant": false, "payable": true, "type": "function", "gas": 600576}, {"name": "updateSettings", "outputs": [], "inputs": [{"type": "uint256", "name": "_numOfInvestments"}, {"type": "uint256", "name": "_amtPerInvestment", "unit": "wei"}, {"type": "uint256", "name": "_bounty", "unit": "wei"}, {"type": "uint256", "name": "_timeDelta", "unit": "sec"}], "constant": false, "payable": false, "type": "function", "gas": 141687}, {"name": "addFunds", "outputs": [], "inputs": [{"type": "address", "name": "_userAddress"}], "constant": false, "payable": true, "type": "function", "gas": 36340}, {"name": "getData", "outputs": [{"type": "bool", "name": "out"}, {"type": "uint256", "name": "out", "unit": "wei"}, {"type": "uint256", "name": "out"}, {"type": "uint256", "name": "out", "unit": "wei"}, {"type": "uint256", "name": "out", "unit": "wei"}, {"type": "uint256", "name": "out", "unit": "sec"}, {"type": "uint256", "name": "out", "unit": "sec"}, {"type": "uint256", "name": "out"}, {"type": "uint256", "name": "out", "unit": "wei"}], "inputs": [{"type": "address", "name": "_userAddress"}], "constant": true, "payable": false, "type": "function", "gas": 4234}]
  }
}

export default DCA;






