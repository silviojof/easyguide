import PropTypes from 'prop-types'
import styled from 'react-emotion'
import {tableCellStyle} from './styles'

const TableCell = styled.td`
  ${tableCellStyle};
`

TableCell.propTypes = {
  numeric: PropTypes.bool,
  children: PropTypes.node,
}

TableCell.defaultProps = {
  numeric: false,
}

export default TableCell
