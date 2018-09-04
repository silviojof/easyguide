import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import TableCell from './TableCell'
import {tableSortLabelStyle, arrowStyle} from './styles'
import Icon from './assets/images/arrow.svg'

const CellStyled = styled(TableCell)`
  ${tableSortLabelStyle};
`

const Arrow = styled.img`
  ${arrowStyle};
`

const TableSortLabel = ({className, active, direction, onClick, children}) => (
  <CellStyled className={className} onClick={onClick}>
    {children}
    {active && <Arrow src={Icon} direction={direction} />}
  </CellStyled>
)

TableSortLabel.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(['asc', 'desc']),
  children: PropTypes.node,
}

TableSortLabel.defaultProps = {
  direction: 'desc',
}

export default TableSortLabel
