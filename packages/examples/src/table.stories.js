/* eslint-disable no-alert */
import React from 'react'
import {storiesOf} from '@storybook/react'
import SimpleTable from './components/Table/SimpleTable'
import SortTable from './components/Table/SortTable'

storiesOf('Table', module)
  .add('default', () => <SimpleTable />)
  .add('sortable', () => <SortTable />)
