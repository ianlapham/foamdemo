import React from "react";

export const Web3Ctx = React.createContext({});

export const withWeb3Ctx = Component => props => (
  <Web3Ctx.Consumer>
    {store => <Component {...props} {...store} />}
  </Web3Ctx.Consumer>
);