/* eslint-disable no-alert */
import React from 'react'
import {storiesOf} from '@storybook/react'
import Table from '@easyguide/table'
import TableHead from '@easyguide/table/dist/TableHead'
import TableBody from '@easyguide/table/dist/TableBody'
import TableRow from '@easyguide/table/dist/TableRow'
import TableCell from '@easyguide/table/dist/TableCell'
import TableSortLabel from '@easyguide/table/dist/TableSortLabel'
import styled from 'react-emotion'

const Wrapper = styled.div`
  padding: 20px;
`

const onClick = () => alert('CLICKED!!!')

const TableSample = () => (
  <Table>
    <TableHead>
      <TableCell>Emissor</TableCell>
      <TableCell>tipo</TableCell>
      <TableCell>Liquidez</TableCell>
      <TableCell>Prazo</TableCell>
      <TableCell>Taxa</TableCell>
      <TableCell>Mínimo</TableCell>
    </TableHead>
    <TableBody>
      <TableRow onClick={onClick}>
        <TableCell>Banco Mercantil do B...</TableCell>
        <TableCell>Prefixado</TableCell>
        <TableCell>Vencimento</TableCell>
        <TableCell>7 anos</TableCell>
        <TableCell>130% do CDI</TableCell>
        <TableCell>R$ 999.999,00</TableCell>
      </TableRow>
      <TableRow onClick={onClick}>
        <TableCell>Banco Mercantil do B...</TableCell>
        <TableCell>Prefixado</TableCell>
        <TableCell>Vencimento</TableCell>
        <TableCell>7 anos</TableCell>
        <TableCell>130% do CDI</TableCell>
        <TableCell>R$ 999.999,00</TableCell>
      </TableRow>
      <TableRow onClick={onClick}>
        <TableCell>Banco Mercantil do B...</TableCell>
        <TableCell>Prefixado</TableCell>
        <TableCell>Vencimento</TableCell>
        <TableCell>7 anos</TableCell>
        <TableCell>130% do CDI</TableCell>
        <TableCell>R$ 999.999,00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

const SortableTable = () => (
  <Table>
    <TableHead>
      <TableSortLabel direction="asc" active onClick={onClick}>
        Emissor
      </TableSortLabel>
      <TableSortLabel direction="desc" active onClick={onClick}>
        tipo
      </TableSortLabel>
      <TableCell>Liquidez</TableCell>
      <TableCell>Prazo</TableCell>
      <TableCell>Taxa</TableCell>
      <TableCell>Mínimo</TableCell>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Banco Mercantil do B...</TableCell>
        <TableCell>Prefixado</TableCell>
        <TableCell>Vencimento</TableCell>
        <TableCell>7 anos</TableCell>
        <TableCell>130% do CDI</TableCell>
        <TableCell>R$ 999.999,00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Banco Mercantil do B...</TableCell>
        <TableCell>Prefixado</TableCell>
        <TableCell>Vencimento</TableCell>
        <TableCell>7 anos</TableCell>
        <TableCell>130% do CDI</TableCell>
        <TableCell>R$ 999.999,00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Banco Mercantil do B...</TableCell>
        <TableCell>Prefixado</TableCell>
        <TableCell>Vencimento</TableCell>
        <TableCell>7 anos</TableCell>
        <TableCell>130% do CDI</TableCell>
        <TableCell>R$ 999.999,00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

storiesOf('Table', module)
  .add('default', () => (
    <Wrapper>
      <TableSample />
    </Wrapper>
  ))
  .add('sortable', () => (
    <Wrapper>
      <SortableTable />
    </Wrapper>
  ))
