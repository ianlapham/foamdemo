import React from "react"
import styled from "styled-components"
import { Row } from "../styles/globals"

const NavWrapper = styled(Row)`
  height: 80px;
  width: calc(100vw-1em);
  color: black;
  background: white;
  padding-left: 3em;
  font-weight: 400;
  position: sticky;
  z-index: 9999;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  top: 0;
`

const Nav = () => (
  <NavWrapper>
    <h3>Foam Threads - Decentralized Restaurant Reviews</h3>
  </NavWrapper>
)

export default Nav
