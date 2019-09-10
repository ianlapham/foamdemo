import React, { Component} from "react";
import styled  from 'styled-components'
import {Box, OutlineButton} from '../styles/globals'
import {TextInput} from 'grommet';

const TextInputSmall = styled(TextInput)`
  border : 1px solid #AEAEAE;
  margin-bottom: 2em;
`
const BoxCol = styled(Box)`
  display : flex;
  flex-direction : column;
  justify-content : flex-start;
  position : relative;
`

const SubmitButton = styled(OutlineButton)`
  right : 2em;
  bottom : 0em;
`

const LeftRow = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : flex-start; 
`

const InputTitle = styled.p`
  margin-bottom : 0.3em;
`

class BountyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BoxCol>
          <LeftRow>
            <InputTitle>{this.props.title}</InputTitle>
            <TextInputSmall
              value={this.state.formValue || ''}
              placeholder={this.props.placeholder}
              onChange={event => this.setState({formValue: event.target.value})}
            />
          </LeftRow>
        <SubmitButton
          label={this.props.buttonText}
          onClick={() => {
            this.props.callFunction(
              this.state.formValue
            )
          }
          }
        />
      </BoxCol>
    );
  }
}

export default BountyForm;
