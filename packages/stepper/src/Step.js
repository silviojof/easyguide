import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Stepper from './Stepper'

class Step extends Component {
  render() {
    return (
      <Stepper.Consumer>{props => this.props.children(props)}</Stepper.Consumer>
    )
  }
}

Step.propTypes = {
  children: PropTypes.func.isRequired,
}

export default Step
