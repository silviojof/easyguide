import PropTypes from 'prop-types'
import styled from 'react-emotion'
import {tableCellStyle, tableCellClipContentStyle} from './styles'

const TableCell = styled.td`
  ${tableCellStyle};
  ${tableCellClipContentStyle};
`

TableCell.propTypes = {
  numeric: PropTypes.bool,
  minWidth: PropTypes.number,
  children: PropTypes.node,
}

TableCell.defaultProps = {
  numeric: false,
}

export default TableCell
