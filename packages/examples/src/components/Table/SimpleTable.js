import React from 'react'
import {action} from '@storybook/addon-actions'
import Table from '@easyguide/table'
import TableHead from '@easyguide/table/dist/TableHead'
import TableBody from '@easyguide/table/dist/TableBody'
import TableRow from '@easyguide/table/dist/TableRow'
import TableCell from '@easyguide/table/dist/TableCell'

import data from '../../fixtures/table'

const clickRow = item => () => action('Click Row')(item)

const SimpleTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Emissor</TableCell>
        <TableCell>tipo</TableCell>
        <TableCell>Prazo</TableCell>
        <TableCell>Taxa</TableCell>
        <TableCell>Mínimo</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data &&
        data.map(item => (
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

export default SimpleTable
