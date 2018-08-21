import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from './Table'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <Table>
        <tr>
          <td>
            Example Component: {text}
          </td>
        </tr>
      </Table>
    )
  }
}
