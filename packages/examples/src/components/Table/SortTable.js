import React from 'react'
import {action} from '@storybook/addon-actions'
import Table from '@easyguide/table'
import TableHead from '@easyguide/table/dist/TableHead'
import TableBody from '@easyguide/table/dist/TableBody'
import TableRow from '@easyguide/table/dist/TableRow'
import TableCell from '@easyguide/table/dist/TableCell'
import TableSortLabel from '@easyguide/table/dist/TableSortLabel'

import data from '../../fixtures/table'

const clickRow = item => () => action('Click Row')(item)

const toggleSortColumnState = column => state => {
  const newState = {
    sortColumn: column,
    sortDirection: state.sortDirection === 'asc' ? 'desc' : 'asc',
  }

  if (state.sortDirection === 'desc') {
    newState.sortColumn = ''
    newState.sortDirection = ''
  }

  if (state.sortColumn !== column) {
    newState.sortColumn = column
    newState.sortDirection = 'asc'
  }

  return newState
}

const sortAscBy = sortBy => (a, b) => (a[sortBy] > b[sortBy] ? -1 : 1)
const sortDescBy = sortBy => (a, b) => (a[sortBy] < b[sortBy] ? -1 : 1)
const sortBy = (orderBy, direction) => {
  const comparator = direction === 'desc' ? sortAscBy : sortDescBy

  return comparator(orderBy)
}

class SortTable extends React.Component {
  state = {
    sortColumn: '',
    sortDirection: '',
    data,
  }

  sortData = () => {
    const {sortColumn, sortDirection} = this.state

    if (sortColumn === '') {
      return this.state.data
    }

    return this.state.data.sort(sortBy(sortColumn, sortDirection))
  }

  toggleSortColumn = column => () => {
    this.setState(toggleSortColumnState(column))
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableSortLabel
              direction={this.state.sortDirection}
              active={
                this.state.sortColumn !== '' &&
                this.state.sortColumn === 'emitter'
              }
              onClick={this.toggleSortColumn('emitter')}
            >
              Emissor
            </TableSortLabel>
            <TableSortLabel
              direction={this.state.sortDirection}
              active={
                this.state.sortColumn !== '' && this.state.sortColumn === 'type'
              }
              onClick={this.toggleSortColumn('type')}
            >
              tipo
            </TableSortLabel>
            <TableSortLabel
              direction={this.state.sortDirection}
              active={
                this.state.sortColumn !== '' &&
                this.state.sortColumn === 'prompt'
              }
              onClick={this.toggleSortColumn('prompt')}
            >
              Prazo
            </TableSortLabel>
            <TableSortLabel
              direction={this.state.sortDirection}
              active={
                this.state.sortColumn !== '' && this.state.sortColumn === 'tax'
              }
              onClick={this.toggleSortColumn('tax')}
            >
              Taxa
            </TableSortLabel>
            <TableSortLabel
              direction={this.state.sortDirection}
              active={
                this.state.sortColumn !== '' && this.state.sortColumn === 'min'
              }
              onClick={this.toggleSortColumn('min')}
            >
              Mínimo
            </TableSortLabel>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data &&
            this.sortData().map(item => (
              <TableRow onClick={clickRow(item)} key={item.id}>
                <TableCell>{item.emitter}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.prompt}</TableCell>
                <TableCell>{item.tax}</TableCell>
                <TableCell>{item.min}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    )
  }
}

export default SortTable
