import React, { Component} from "react";
import styled from 'styled-components'
import {Box, Column} from '../styles/globals'

const BoxCol = styled(Box)`
  display : flex;
  flex-direction : column;
  justify-content : flex-start;
  position : relative;
`
const StatSection = styled(Column)`
  justify-content : space-around;
  height : 460px;
`
const Stat = styled(Column)`
  justify-content: center;
  align-items : center;
`
const Break = styled.div`
  height : 1px;
  width : 100%;
  background-color : #BDBDBD;
`
const StatNum = styled.p `
  font-size : 32px;
  font-weight : 600;
  margin-top : 0.7em;
`
const StatSub = styled.p `
  font-size : 16px;
  font-weight : 400;
  color : #A6A3A3;
`
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BoxCol>
        <StatSection>
          {!this.props.active ? <h3>No account yet. Create one using the create account form!</h3> : 
            <>
              <Stat>
                <StatSub>Amount Per Investment</StatSub>
                <StatNum>{this.props.amountPerInvestment} ETH</StatNum>
              </Stat>
              <Break />
              <Stat>
                <StatSub>Bounty Per Investment</StatSub>
                <StatNum>{this.props.bounty} ETH</StatNum>
              </Stat>
              <Break />
              <Stat>
                <StatSub>Time Between Investments</StatSub>
                <StatNum>{this.props.timeDelta} Days</StatNum>
              </Stat>
            </>
          }
        </StatSection>
      </BoxCol>
    );
  }
}

export default Stats;
