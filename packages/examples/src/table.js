import React from 'react'
import {storiesOf} from '@storybook/react'
import Table from '@easyguide/table'
import TableRow from '@easyguide/table/dist/TableRow'
import TableCell from '@easyguide/table/dist/TableCell'
import styled from 'react-emotion'

const Wrapper = styled.div`
  padding: 20px;
`

const TableSample = () => (
  <Table>
    <TableRow>
      <TableCell>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </TableCell>
      <TableCell>Coluna 2</TableCell>
    </TableRow>
  </Table>
)

storiesOf('Table', module).add('default', () => (
  <Wrapper>
    <TableSample />
  </Wrapper>
))
