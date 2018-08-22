import styled from 'react-emotion'
import PropTypes from 'prop-types'
import {tableRowStyle} from './styles'

const TableRow = styled.tr`
  ${tableRowStyle};
`

TableRow.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

TableRow.defaultProps = {
  onClick: () => null,
}

export default TableRow
