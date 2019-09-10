import styled from 'styled-components'
import {Button} from 'grommet';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`
export const Box = styled.div`  
  padding : 2em
`
export const Card = styled.div`
  padding : 2em;
  background-color : white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.1);
  border-radius : 0.4em;
`

export const CenteredRow = styled(Row)`  
  justify-content : center;
  padding-left : 0;
`

export const BoldText = styled.p`  
  font-weight : 600;
  font-size : 1.7em;
`

export const Column = styled.div`
  display : flex;
  flex-direction : column; 
  justify-content: space-between;
  align-items : space-between;
`

export const OutlineButton = styled(Button)`
  width : 160px;
  height : 40px;
  position : absolute;
  display : flex;
  flex-direction : row;
  justify-content : center;
  font-weight : 600;
  border-color : #612BE5;
  border-radius : 0.4em;
`
export const Subheader = styled.p`
  font-weight : 400px;
  color : #9D9797;
  margin-top : 1em;
`